using GersonCastillo_Pro.Client.Models;
using Microsoft.Extensions.Localization;
using System.Collections.Generic;
using System.Linq;

namespace GersonCastillo_Pro.Client.Services
{
    public class PortfolioDataService : IPortfolioDataService
    {
        private readonly IStringLocalizer<Resources.Shared> _localizer;

        public PortfolioDataService(IStringLocalizer<Resources.Shared> localizer)
        {
            _localizer = localizer;
        }

        public List<BusinessSkill> GetBusinessSkills()
        {
            return new List<BusinessSkill>
            {
                new(_localizer["BusinessSkill1"], "auditing.svg"),
                new(_localizer["BusinessSkill2"], "finangrow.svg"),
                new(_localizer["BusinessSkill3"], "think.svg"),
                new(_localizer["BusinessSkill4"], "internalcontrol.svg"),
                new(_localizer["BusinessSkill5"], "document.svg"),
                new(_localizer["BusinessSkill6"], "entries.svg"),
                new(_localizer["BusinessSkill7"], "bank.svg"),
                new(_localizer["BusinessSkill8"], "payments.svg"),
                new(_localizer["BusinessSkill9"], "keyboard.svg")
            };
        }

        public List<ProjectModel> GetPersonalProjects()
        {
            return new List<ProjectModel>
            {
                new(_localizer["PersonalProject1Title"], 
                    _localizer["PersonalProject1Description"], 
                    _localizer["PersonalProject1Action"], 
                    "DAX functions, Power BI, Power Point, Blazor Razor pages, HTML, CSS.;", 
                    "Blazor WebAssembly, Bootstrap 5;", 
                    "https://gersoncastillo.dev/consolidacion", 
                    "MS Power BI"),

                new(_localizer["PersonalProject2Title"], 
                    _localizer["PersonalProject2Description"], 
                    _localizer["PersonalProject2Action"], 
                    "C#, JavaScript, Razor, HTML, CSS, SASS.;", 
                    "Blazor WebAssembly, Bootstrap 5;", 
                    "https://github.com/gersoncl10000/Personal_Website", 
                    "github"),

                new(_localizer["PersonalProject3Title"], 
                    _localizer["PersonalProject3Description"], 
                    _localizer["PersonalProject3Action"], 
                    "C#, SQL, LINQ, XAML ;", 
                    "WPF, SQL Server 2017, Entity Framework, FRED API, Eurostat Web Services;", 
                    "https://github.com/gersoncl10000/7Gplus", 
                    "github")
            };
        }

        public List<ProjectModel> GetEnterpriseProjects()
        {
            return new List<ProjectModel>
            {
                new(_localizer["EnterpriseProject1Title"], 
                    _localizer["EnterpriseProject1Description"], 
                    _localizer["EnterpriseProject1Action"], 
                    "C#, JavaScript, SQL, LINQ, Razor, HTML, CSS.;", 
                    "Blazor WebAssembly, Blazor Server, SQL Server 2019, IndexedDB, Entity Framework Core, SAP Business One SDK, Bootstrap 4, Stripe SDK, PayPal .NET SDK and Binance API.;", 
                    "https://dev.azure.com/Redemerca/Redemerca", 
                    "azure"),

                new(_localizer["EnterpriseProject2Title"], 
                    _localizer["EnterpriseProject2Description"], 
                    _localizer["EnterpriseProject2Action"], 
                    "C#, JavaScript, SQL, LINQ, Razor, HTML, CSS;", 
                    "ASP.NET MVC 5, SQL Server 2017, Entity Framework, SAP Business One SDK, Bootstrap 3, JQuery, Stripe SDK, PayPal .NET SDK, Binance API.;", 
                    "https://gcyanir.visualstudio.com/MarluisWEB/_versionControl", 
                    "azure"),

                new(_localizer["EnterpriseProject3Title"], 
                    _localizer["EnterpriseProject3Description"], 
                    _localizer["EnterpriseProject3Action"], 
                    "C#, SQL,LINQ, XAML. ;", 
                    "WPF, SQL Server 2017, Entity Framework, SAP Business One SDK.;", 
                    "https://dev.azure.com/Redemerca/_git/GC", 
                    "azure"),

                new(_localizer["EnterpriseProject4Title"], 
                    _localizer["EnterpriseProject4Description"], 
                    _localizer["EnterpriseProject4Action"], 
                    "C#, SQL, LINQ, XAML;", 
                    "WPF, SQL Server 2017, Entity Framework, SAP Business One SDK. Gmail API .NET;", 
                    "https://gersoncl10000.visualstudio.com/BancosAdmin/_git/BancosAdministrativo", 
                    "azure")
            };
        }

        public List<WorkExperience> GetCurrentJobs()
        {
            return new List<WorkExperience>
            {
                new(new List<string> { _localizer["CurrentJob1Title1"], _localizer["CurrentJob1Title2"] }, 
                    _localizer["CurrentJob1Period"], 
                    _localizer["CurrentJob1Location"], 
                    new List<string> 
                    { 
                        _localizer["CurrentJob1Responsibility1"],
                        _localizer["CurrentJob1Responsibility2"],
                        _localizer["CurrentJob1Responsibility3"],
                        _localizer["CurrentJob1Responsibility4"],
                        _localizer["CurrentJob1Responsibility5"],
                        _localizer["CurrentJob1Responsibility6"]
                    }),

                new(new List<string> { _localizer["CurrentJob2Title1"] }, 
                    _localizer["CurrentJob2Period"], 
                    "", 
                    new List<string> 
                    { 
                        _localizer["CurrentJob2Responsibility1"],
                        _localizer["CurrentJob2Responsibility2"],
                        _localizer["CurrentJob2Responsibility3"]
                    })
            };
        }

        public List<WorkExperience> GetPastJobs()
        {
            return new List<WorkExperience>
            {
                new(new List<string> { _localizer["PastJob1Title1"] }, 
                    _localizer["PastJob1Period"], 
                    "", 
                    new List<string> 
                    { 
                        _localizer["PastJob1Responsibility1"],
                        _localizer["PastJob1Responsibility2"],
                        _localizer["PastJob1Responsibility3"],
                        _localizer["PastJob1Responsibility4"],
                        _localizer["PastJob1Responsibility5"],
                        _localizer["PastJob1Responsibility6"],
                        _localizer["PastJob1Responsibility7"]
                    })
            };
        }

        public List<Education> GetAcademicDegrees()
        {
            return new List<Education>
            {
                new("img/icons/langaracoa.jpg", "Langara College", _localizer["AcademicDegree1"], "BC,Canada (2023)"),
                new("img/icons/Logo-Ilac.png", "ILAC", _localizer["AcademicDegree2"], "BC,Canada (2022)"),
                new("img/icons/ugma-logo.png", "Universidad Nororiental Gran Mariscal de Ayacucho", _localizer["AcademicDegree3"], "BO,Venezuela (2016)"),
                new("img/icons/logoucab.png", "Andrés Bello Catholic University", _localizer["AcademicDegree4"], "BO,Venezuela (2010)")
            };
        }

        public List<Certification> GetCertifications()
        {
            // Las certificaciones mantienen sus nombres originales ya que son títulos oficiales
            return new List<Certification>
            {
                new("img/icons/Microsoft_logo.svg", "https://coursera.org/share/797b370403137a06821cc41d2f567946", "on going...", "Azure Data Engineer Associate", "Coursera, on going... 2024"),
                new("img/icons/INEAF.png", "/files/certificate20241013-1848.pdf", "Show credential", "Advanced Course in Accounting and Tax Consolidation", "INEAF - Business School, October 2024"),
                new("img/icons/MongoBD.png", "https://coursera.org/share/d42dc58e346e2f9b6799ef823eff2456", "Show credential", "MongoDB", "MongoDB Inc., October 2024"),
                new("img/icons/Udemy-Emblem.png", "https://www.udemy.com/certificate/UC-51f6f737-1d7e-47f7-b1d7-61d31a3acfc0/", "Show credential", "Microsoft Power BI for Financial Reporting", "Udemy, May 2024"),
                new("img/icons/Udemy-Emblem.png", "https://www.udemy.com/certificate/UC-28862c0b-fcd6-4561-807a-e379abf737e5/", "Show credential", "Blazor - ASP.NET Core 7", "Udemy, April 2024"),
                new("img/icons/cursera-logo.png", "https://coursera.org/share/797b370403137a06821cc41d2f567946", "Show credential", "Developing AI Applications with Python and Flask", "Coursera, April 2024"),
                new("img/icons/cursera-logo.png", "https://coursera.org/share/836a2adb6de566669e606c0333ac9b63", "Show credential", "Python for Data Science, AI & Development", "Coursera, March 2024"),
                new("img/icons/cursera-logo.png", "https://coursera.org/share/4003bfddad469b0c58757e92e1aeec45", "Show credential", "Introduction to DevOps", "Coursera, March 2024")
            };
        }
    }
}