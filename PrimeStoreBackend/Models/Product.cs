namespace WebApplication1.Models;

public class Product
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public Brand Brand { get; set; }
    public string Model { get; set; }
    public Subcategory Subcategory { get; set; }
}