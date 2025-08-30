using GersonCastillo_Pro.Client.Models;
using GersonCastillo_Pro.Client.Services;
using Microsoft.AspNetCore.Components;
using System.Collections.Generic;

namespace GersonCastillo_Pro.Client.Pages
{
    public partial class Index
    {
        [Inject]
        private IPortfolioDataService? PortfolioDataService { get; set; }

        private List<BusinessSkill>? businessSkills;
        private List<ProjectModel>? personalProjects;
        private List<ProjectModel>? enterpriseProjects;
        private List<WorkExperience>? currentJobs;
        private List<WorkExperience>? pastJobs;
        private List<Education>? academicDegrees;
        private List<Certification>? certifications;

        protected override void OnInitialized()
        {
            businessSkills = PortfolioDataService.GetBusinessSkills();
            personalProjects = PortfolioDataService.GetPersonalProjects();
            enterpriseProjects = PortfolioDataService.GetEnterpriseProjects();
            currentJobs = PortfolioDataService.GetCurrentJobs();
            pastJobs = PortfolioDataService.GetPastJobs();
            academicDegrees = PortfolioDataService.GetAcademicDegrees();
            certifications = PortfolioDataService.GetCertifications();
        }
    }
}