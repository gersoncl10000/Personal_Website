namespace GersonCastillo_Pro.Client.Models
{
    public class BusinessSkill
    {
        public string Description { get; set; }
        public string Icon { get; set; }

        public BusinessSkill(string description, string icon)
        {
            Description = description;
            Icon = icon;
        }
    }
}