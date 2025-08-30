using GersonCastillo_Pro.Client.Models;
using System.Collections.Generic;
using System.Linq;

namespace GersonCastillo_Pro.Client.Services
{
    public class PortfolioDataService : IPortfolioDataService
    {
        private readonly List<BusinessSkill> _businessSkills = new()
        {
            new("Expertise and Advanced Knowledge in Financial Consolidation, Accounting, and Auditing (IFRS, PGC, and NOFCAC)", "auditing.svg"),
            new("Advanced knowledge in financial, investment, and business management.", "finangrow.svg"),
            new("Excellent ability for comprehensive risk assessment and development of effective strategies.", "think.svg"),
            new("Internal controls process automation.", "internalcontrol.svg"),
            new("Financial Reports Automation, ETL & ELT Processes, with Advanced Proficiency in Reporting and Data Modeling Tools such as Power BI and Excel", "document.svg"),
            new("Accounting entries automation.", "entries.svg"),
            new("Bank reconciliation automation.", "bank.svg"),
            new("Payments automation.", "payments.svg"),
            new("Data entry Automation.", "keyboard.svg")
        };

        private readonly List<ProjectModel> _personalProjects = new()
        {
            new("Presentation of Financial Consolidation Exercise: 2024", "I have prepared a comprehensive financial consolidation exercise utilizing Power BI and DAX functions. This exercise aims to demonstrate the main principles of financial consolidation under the IFRS standards, specifically IAS 21. The final financial reports have been embedded into a web page using Power BI Embedded for seamless access and interaction.", "I developed the whole exercise.", "DAX funtions, Power BI, Power Point, Blazor Razor pages, HTML, CSS.;", "Bazor WebAssembly, Bootstrap 5;", "https://gersoncastillo.dev/consolidacion", "MS Power BI"),
            new("Personal web page: 2023", "Professional web page.", "I developed the whole project.", "C#, JavaScript, Razor, HTML, CSS, SASS.;", "Bazor WebAssembly, Bootstrap 5;", "https://github.com/gersoncl10000/Personal_Website", "github"),
            new("7Gplus: 2017", "Program to analyze the currency derivatives market.", "I developed the whole project.", "C#, SQL, LINQ, XAML ;", "WFP, SQL Server 2017, Entity Framework, FRED API, Eurostat Web Services;", "https://github.com/gersoncl10000/7Gplus", "github")
        };

        private readonly List<ProjectModel> _enterpriseProjects = new()
        {
            new("E-Comerce 2.0 Year:  2021", "The second version of the groceries eCommerce web app was developed to exploit the potential of the latest technologies from Microsoft ASP.NET Core.", "I was involved in the five steps of software development of the App's financial, accountant, and administrative components. I also taught programming to our team's newest members.", "C#, JavaScript, SQL, LINQ, Razor, HTML, CSS.;", "Bazor WebAssembly, Bazor Server, SQL Server 2019, IndexedDB, Entity Framework Core, SAP Business One SDK, Bootstrap 4, Stripe SDK, PayPal .NET SDK and Binance API.;", "https://dev.azure.com/Redemerca/Redemerca", "azure"),
            new("E-Comerce 1.0 Year:  2019", "Groceries eCommerce web app fully integrated with the ERP SAP Business One to attend to around 40,000 retail customers.", "My participation comprehended the App's financial and accounting development.", "C#, JavaScript, SQL, LINQ, Razor, HTML, CSS;", "ASP.NET MVC 5, SQL Server 2017, Entity Framework, SAP Business One SDK, Bootstrap 3, JQuery, Stripe SDK, PayPal .NET SDK, Binance API.;", "https://gcyanir.visualstudio.com/MarluisWEB/_versionControl", "azure"),
            new("GC Internal Management Software:  2017", "Internal software of gestion of logistics and administration process, developed under .NET technology fully integrated with the ERP SAP Business One.", "I participated in developing the accounting, financial and administrative modules.", "C#, SQL,LINQ, XAML. ;", "WPF, SQL Server 2017, Entity Framework, SAP Business One SDK.;", "https://dev.azure.com/Redemerca/_git/GC", "azure"),
            new("Banking and Accounting automatized: 2016", "Program for automatic management of banking and accounting.", "I developed the whole project.", "C#, SQL, LINQ, XAML;", "WPF, SQL Server 2017, Entity Framework, SAP Business One SDK. Gmail API .NET;", "https://gersoncl10000.visualstudio.com/BancosAdmin/_git/BancosAdministrativo", "azure")
        };

        private readonly List<WorkExperience> _currentJobs = new()
        {
            new(new List<string> { "Customer Success Manager", "(Consolidation specialist)" }, "Konsolidator Iberia · Full-Time 2024 - Present", "Madrid, Comunidad de Madrid, Spain · On-Site", new List<string> { "Expert in Financial Consolidation: Proficient in managing and optimizing financial consolidation processes.", "Product Specialist: In-depth knowledge of product functionalities and applications.", "Financial Statement Analysis Specialist: Experienced in analyzing and interpreting financial statements for accurate reporting.", "Accounting and Auditing Specialist: Expert in PGC, NOFCAC, IFRS, and IAS standards, ensuring compliance and accuracy.", "Financial Reporting and Business Intelligence Specialist: Advanced skills in Power BI, Advanced Excel, SQL, and M Language for robust financial reporting and analysis.", "Automation Solutions Developer: Proficient in creating automation solutions using REST API, .Net Core, and SQL Server to streamline processes and enhance efficiency." }),
            new(new List<string> { "Business owner" }, "Redemerca LLC 2019-Present", "", new List<string> { "Invesment protafolio's management. (Stock, Options & Futures).", "Market and company analysis.", "Software development focused on market analysis." })
        };

        private readonly List<WorkExperience> _pastJobs = new()
        {
            new(new List<string> { "Director of Finance And Administration" }, "Marluis Invesments 2006-2022", "", new List<string> { "Management of the accounting, auditing, financial, administrative, and human resources areas.", "Modeling and preparation of financial statements under IFRS standards.", "Development of investment plans and strategies, budgets, and tax planning.", "Supervision of administrative and accounting processes, internal auditing, internal control, and personnel management.", "Software development and management of financial operations automation processes.", "Development of ETL and ELT processes, ASP.NET Core, SQL Server, Power BI, Power Query, DAX.", "Financial and accounting integration of internal software developments with the ERP system SAP Business One." })
        };

        private readonly List<Education> _academicDegrees = new()
        {
            new("img/icons/langaracoa.jpg", "Langara College", "English for Academic Purposes (LEAP)", "BC,Canada (2023)"),
            new("img/icons/Logo-Ilac.png", "ILAC", "Business English Certificate", "BC,Canada (2022)"),
            new("img/icons/ugma-logo.png", "Universidad Nororiental Gran Mariscal de Ayacucho", "Attorney", "BO,Venezuela (2016)"),
            new("img/icons/logoucab.png", "Andrés Bello Catholic University", "Bachelor's Degree in Accounting", "BO,Venezuela (2010)")
        };

        private readonly List<Certification> _certifications = new()
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

        public List<BusinessSkill> GetBusinessSkills() => _businessSkills;
        public List<ProjectModel> GetPersonalProjects() => _personalProjects;
        public List<ProjectModel> GetEnterpriseProjects() => _enterpriseProjects;
        public List<WorkExperience> GetCurrentJobs() => _currentJobs;
        public List<WorkExperience> GetPastJobs() => _pastJobs;
            public List<Education> GetAcademicDegrees() => _academicDegrees;
            public List<Certification> GetCertifications() => _certifications;
        }
    }