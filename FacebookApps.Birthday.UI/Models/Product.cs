using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FacebookApps.Birthday.UI.Models
{
    public class Product
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string ClickUrl { get; set; }

        public ProductImage Image { get; set; }

        public string PriceLabel { get; set; }
    }
}