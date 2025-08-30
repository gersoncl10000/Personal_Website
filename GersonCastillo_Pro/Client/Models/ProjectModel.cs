namespace GersonCastillo_Pro.Client.Models
{
    public class ProjectModel
    {
        public string Tittle { get; set; }
        public string Description { get; set; }
        public string Action { get; set; }
        public string Languages { get; set; }
        public string FrameworksLibraries { get; set; }
        public string Link { get; set; }
        public string Repository { get; set; }

        public ProjectModel(string tittle, string description, string action, string languages, string frameworksLibraries, string link, string repository)
        {
            Tittle = tittle;
            Description = description;
            Action = action;
            Languages = languages;
            FrameworksLibraries = frameworksLibraries;
            Link = link;
            Repository = repository;
        }
    }
}