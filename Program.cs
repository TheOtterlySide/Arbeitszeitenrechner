using System.Globalization;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Arbeitszeitenrechner;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Localization;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddLocalization(options => options.ResourcesPath = "LanguageFiles");
builder.Services.AddScoped<IStringLocalizer<Index>,StringLocalizer<Index>>();
var supportedCultures = new List<CultureInfo> 
    { 
        new CultureInfo("en"), 
        new CultureInfo("de") 
    };
builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    options.DefaultRequestCulture = new Microsoft.AspNetCore.Localization.RequestCulture("de");
    options.SupportedUICultures = supportedCultures;
});

var culture = new CultureInfo("de");
CultureInfo.DefaultThreadCurrentCulture = culture;
CultureInfo.DefaultThreadCurrentUICulture = culture;



builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });




await builder.Build().RunAsync();