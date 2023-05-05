using PrimeStoreBackend.Models;

namespace WebApplication1.Models;

public class Product
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public Brand Brand { get; set; }
    public string Model { get; set; }
    public Subcategory Subcategory { get; set; }
    public byte[] ImageData { get; set; }
    public decimal PriceNow { get; set; }
    public decimal PriceBefore { get; set; }
    public bool OnPromo { get; set; }
}