using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Subcategory
{
    [Key] public int SubcategoryId { get; set; }

    public string Name { get; set; }

    // Navigation property
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public string ImageName { get; set; }
    public ICollection<Product> Products { get; set; }
}