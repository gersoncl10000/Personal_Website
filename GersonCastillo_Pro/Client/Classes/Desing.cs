namespace GersonCastillo_Pro.Client.Classes
{
    public class Desing
    {

        /// <summary>
        /// Segment Desing 
        /// </summary>
        /// 

        #region Horizontal divider
        //Horizontal Divadier 1 Background Color 
        public string color_hz_div_1 {  get; set; }
        //Horizontal Divadier 1 Text Color 
        public string text_color_hz_div_1 { get; set; }
        #endregion

        #region Segment content
        //Vertical divadier 1 width 
        public int width_segment_content_v_div_1 { get; set; }
        //Vertical divadier 1 color 
        public string color_segment_content_v_div_1 { get; set; }
        //
        public enum ESegment_Types
        {
            divider = 1,
            content = 2
        }
        #endregion





        public Desing() {

            // Segment desing variables inizilization
            //Horizontal divider
            color_hz_div_1 = "bg-dark";
            text_color_hz_div_1 = "text-white";
            
            //Vertical divider
            //width
            width_segment_content_v_div_1 = 40;
            //Color
            color_segment_content_v_div_1 = "bg-danger";


        }




    }


}
