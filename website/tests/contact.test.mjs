import { test } from "node:test";
import assert from "node:assert/strict";
import { sendContact, endpoint } from "../src/lib/contact.mjs";

const payload = () => {
  const data = new FormData();
  data.set("access_key", "unit-test-not-a-real-key");
  data.set("name", "Prueba local");
  data.set("email", "test@example.com");
  data.set("message", "Mensaje de prueba sin envío real.");
  return data;
};

test("Only a successful provider response confirms the submission", async () => {
  const data = payload();
  const result = await sendContact(data, async (url, options) => {
    assert.equal(url, endpoint);
    assert.equal(options.method, "POST");
    assert.equal(options.body, data);
    assert.equal(options.credentials, "omit");
    return { ok: true, status: 200, json: async () => ({ success: true }) };
  });
  assert.equal(result.ok, true);
  for (const [ok, success] of [
    [false, true],
    [true, false],
    [true, "true"],
    [true, undefined],
  ]) {
    assert.equal(
      (
        await sendContact(payload(), async () => ({
          ok,
          status: 400,
          json: async () => ({ success }),
        }))
      ).ok,
      false,
    );
  }
});

test("Missing configuration and filled honeypot prevent requests", async () => {
  const noNetwork = async () => {
    throw new Error("Network should not be called");
  };
  let calls = 0;
  const fetcher = async () => {
    calls++;
    return noNetwork();
  };
  assert.equal((await sendContact(new FormData(), fetcher)).ok, false);
  const bot = payload();
  bot.set("botcheck", "on");
  assert.equal((await sendContact(bot, fetcher)).ok, false);
  assert.equal(calls, 0);
});

test("Rate limits, network failures and invalid JSON are failures without retries", async () => {
  for (const response of [
    async () => ({ status: 429 }),
    async () => {
      throw new Error("Network unavailable");
    },
    async () => ({
      ok: true,
      status: 200,
      json: async () => {
        throw new Error("Invalid JSON");
      },
    }),
  ]) {
    let calls = 0;
    const data = payload();
    const result = await sendContact(data, async (...args) => {
      calls++;
      return response(...args);
    });
    assert.equal(result.ok, false);
    assert.equal(calls, 1);
    assert.equal(data.get("message"), "Mensaje de prueba sin envío real.");
  }
});
