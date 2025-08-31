using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Globalization;

namespace GersonCastillo_Pro.Client.Shared
{
    public partial class CultureSelectorBase : ComponentBase, IAsyncDisposable
    {
        [Inject] protected IJSRuntime JSRuntime { get; set; } = default!;
        [Inject] protected NavigationManager NavigationManager { get; set; } = default!;

        [Parameter] public EventCallback<string> OnCultureChanged { get; set; }

        protected static readonly CultureInfo[] SupportedCultures = 
        {
            new("en-US"),
            new("es-ES")
        };

        protected string SelectedCulture { get; set; } = "es-ES";
        protected bool IsChangingCulture { get; set; } = false;

        protected override async Task OnInitializedAsync()
        {
            SelectedCulture = await GetSavedCultureAsync();
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                // Inicializar tooltips de Bootstrap
                await JSRuntime.InvokeVoidAsync("initializeTooltips");
            }
        }

        protected async Task<string> GetSavedCultureAsync()
        {
            try
            {
                var savedCulture = await JSRuntime.InvokeAsync<string>("blazorCulture.get");
                
                if (!string.IsNullOrEmpty(savedCulture) && IsValidCulture(savedCulture))
                    return savedCulture;
                    
                var currentCulture = CultureInfo.CurrentCulture.Name;
                return IsValidCulture(currentCulture) ? currentCulture : "es-ES";
            }
            catch
            {
                return "es-ES";
            }
        }

        protected async Task ChangeCultureAsync(string newCulture)
        {
            if (SelectedCulture == newCulture || !IsValidCulture(newCulture) || IsChangingCulture)
                return;

            try
            {
                IsChangingCulture = true;
                StateHasChanged();

                // Pequeño delay para mostrar el loading
                await Task.Delay(300);

                SelectedCulture = newCulture;
                await JSRuntime.InvokeVoidAsync("blazorCulture.set", newCulture);
                await OnCultureChanged.InvokeAsync(newCulture);
                
                // Forzar recarga para aplicar el cambio de cultura
                NavigationManager.NavigateTo(NavigationManager.Uri, forceLoad: true);
            }
            catch
            {
                SelectedCulture = CultureInfo.CurrentCulture.Name;
                IsChangingCulture = false;
                StateHasChanged();
            }
        }

        protected string GetActiveClass(string cultureName) => 
            SelectedCulture == cultureName ? "active" : string.Empty;

        protected static string GetCultureDisplayName(CultureInfo culture) => culture.Name switch
        {
            "en-US" => "Switch to English",
            "es-ES" => "Cambiar a Español",
            _ => culture.DisplayName
        };

        protected static string GetFlagImagePath(string cultureName) => cultureName switch
        {
            "en-US" => "img/icons/flags/uk.svg",
            "es-ES" => "img/icons/flags/es.svg",
            _ => "img/icons/flags/default.svg"
        };

        protected static bool IsValidCulture(string cultureName)
        {
            if (string.IsNullOrEmpty(cultureName))
                return false;

            try
            {
                _ = new CultureInfo(cultureName);
                return SupportedCultures.Any(c => c.Name == cultureName);
            }
            catch
            {
                return false;
            }
        }

        public async ValueTask DisposeAsync()
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("disposeTooltips");
            }
            catch
            {
                // Ignorar errores en dispose
            }
        }
    }
}