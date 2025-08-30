namespace GersonCastillo_Pro.Client.Models
{
    public class Certification
    {
        public string Logo { get; }
        public string CredentialLink { get; }
        public string LinkText { get; }
        public string Name { get; }
        public string InstitutionAndDate { get; }

        public Certification(string logo, string credentialLink, string linkText, string name, string institutionAndDate)
        {
            Logo = logo;
            CredentialLink = credentialLink;
            LinkText = linkText;
            Name = name;
            InstitutionAndDate = institutionAndDate;
        }
    }
}