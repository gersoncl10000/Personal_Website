using GersonCastillo_Pro.Client.Models;
using System.Collections.Generic;

namespace GersonCastillo_Pro.Client.Services
{
        public interface IPortfolioDataService
        {
            List<BusinessSkill> GetBusinessSkills();
            List<ProjectModel> GetPersonalProjects();
            List<ProjectModel> GetEnterpriseProjects();
            List<WorkExperience> GetCurrentJobs();
            List<WorkExperience> GetPastJobs();
            List<Education> GetAcademicDegrees();
            List<Certification> GetCertifications();
        }
    }