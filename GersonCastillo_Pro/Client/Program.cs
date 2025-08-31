using GersonCastillo_Pro.Client;
using GersonCastillo_Pro.Client.Services;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.JSInterop;
using System.Globalization;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// Registrar el servicio como Scoped para que se recree con cada cambio de cultura
builder.Services.AddScoped<IPortfolioDataService, PortfolioDataService>();

// Configuración de localización
builder.Services.AddLocalization();

var host = builder.Build();

// Configuración de cultura
await SetCultureAsync(host);

await host.RunAsync();

static async Task SetCultureAsync(WebAssemblyHost host)
{
    try
    {
        var js = host.Services.GetRequiredService<IJSRuntime>();
        
        // Obtener cultura guardada
        var result = await js.InvokeAsync<string>("blazorCulture.get");
        
        CultureInfo culture;
        if (!string.IsNullOrEmpty(result) && IsValidCulture(result))
        {
            culture = new CultureInfo(result);
        }
        else
        {
            // Default culture based on user's preference (Spanish as per original)
            culture = new CultureInfo("es-ES");
            await js.InvokeVoidAsync("blazorCulture.set", "es-ES");
        }

        // Aplicar cultura
        CultureInfo.DefaultThreadCurrentCulture = culture;
        CultureInfo.DefaultThreadCurrentUICulture = culture;
    }
    catch (Exception ex)
    {
        var defaultCulture = new CultureInfo("es-ES");
        CultureInfo.DefaultThreadCurrentCulture = defaultCulture;
        CultureInfo.DefaultThreadCurrentUICulture = defaultCulture;
    }
}

static bool IsValidCulture(string cultureName)
{
    try
    {
        if (string.IsNullOrEmpty(cultureName)) return false;
        var culture = new CultureInfo(cultureName);
        return cultureName == "en-US" || cultureName == "es-ES";
    }
    catch
    {
        return false;
    }
}
