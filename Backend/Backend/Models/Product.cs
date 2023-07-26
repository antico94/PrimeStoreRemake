using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Product
{
    [Key] public int ProductId { get; set; }

    public string Title { get; set; }
    public string? Description { get; set; }
    public int? BrandId { get; set; }
    public Brand? Brand { get; set; }
    public string? Model { get; set; }
    public int SubcategoryId { get; set; }
    public Subcategory Subcategory { get; set; }
    public string ImageUrl { get; set; }
    public decimal PriceNow { get; set; }
    public decimal? PriceBefore { get; set; }
    public bool? OnPromo { get; set; }
}