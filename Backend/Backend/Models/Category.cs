using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public ICollection<Subcategory> Subcategories { get; set; }
    }
}