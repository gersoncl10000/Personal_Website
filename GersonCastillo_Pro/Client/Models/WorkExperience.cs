namespace GersonCastillo_Pro.Client.Models
{
    public class WorkExperience
    {
        public List<string> Titles { get; }
        public string Period { get; }
        public string Location { get; }
        public List<string> Responsibilities { get; }

        public WorkExperience(List<string> titles, string period, string location, List<string> responsibilities)
        {
            Titles = titles;
            Period = period;
            Location = location;
            Responsibilities = responsibilities;
        }
    }
}