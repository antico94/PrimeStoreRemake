namespace Backend.Models.DTOs;

public class ProductDTO
{
    public int ProductId { get; set; }
    public string Title { get; set; }
    public int SubcategoryId { get; set; }
    public decimal Price { get; set; }
    public string ImageUrl { get; set; }
}