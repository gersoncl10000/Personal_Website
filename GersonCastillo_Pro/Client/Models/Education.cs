namespace GersonCastillo_Pro.Client.Models
{
    public class Education
    {
        public string InstitutionLogo { get; }
        public string InstitutionName { get; }
        public string Degree { get; }
        public string LocationAndYear { get; }

       

        public Education(string institutionLogo, string institutionName, string degree, string locationAndYear)
        {
            InstitutionLogo = institutionLogo;
            InstitutionName = institutionName;
            Degree = degree;
            LocationAndYear = locationAndYear;
        }
    }
}