using Newtonsoft.Json;

namespace FacebookApps.Birthday.UI.Models
{
    public class FacebookPhoto
    {
        [JsonProperty("picture")] // This renames the property to picture.
        public string ThumbnailUrl { get; set; }

        public string Link { get; set; }
    }
}
