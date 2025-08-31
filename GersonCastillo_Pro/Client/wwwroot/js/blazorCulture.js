window.blazorCulture = {
    get: () => window.localStorage.getItem('BlazorCulture'),
    set: (value) => {
        window.localStorage.setItem('BlazorCulture', value);
        return value;
    }
};