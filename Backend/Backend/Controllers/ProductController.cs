using Backend.Models;
using Backend.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly PrimeStoreDbContext _context;

    public ProductController(PrimeStoreDbContext context)
    {
        _context = context;
    }

    // GET: api/Product
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProducts()
    {
        var products = await _context.Products
            .Select(p => new ProductDTO
            {
                ProductId = p.ProductId,
                Title = p.Title,
                SubcategoryId = p.SubcategoryId,
                Price = p.PriceNow,
                ImageUrl = p.ImageUrl
            })
            .ToListAsync();

        if (products == null) return NotFound();

        return products;
    }

    // GET: api/Product/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDTO>> GetProductDTO(int id)
    {
        var product = await _context.Products
            .Include(p => p.Subcategory)
            .Where(p => p.ProductId == id)
            .Select(p => new ProductDTO
            {
                ProductId = p.ProductId,
                Title = p.Title,
                SubcategoryId = p.SubcategoryId,
                Price = p.PriceNow,
                ImageUrl = p.ImageUrl
            })
            .FirstOrDefaultAsync();

        if (product == null) return NotFound();

        return product;
    }

    // GET: api/Product/Search/{keyword}
    [HttpGet("Search/{keyword}")]
    public async Task<ActionResult<List<ProductDTO>>> SearchProducts(string keyword)
    {
        var products = await _context.Products
            .Include(p => p.Subcategory)
            .Where(p => p.Title.ToLower().Contains(keyword.ToLower()))
            .Select(p => new ProductDTO
            {
                ProductId = p.ProductId,
                Title = p.Title,
                SubcategoryId = p.SubcategoryId,
                Price = p.PriceNow,
                ImageUrl = p.ImageUrl
            })
            .ToListAsync();

        if (products == null || products.Count == 0) return new List<ProductDTO>();

        return products;
    }

    // POST: api/Product/GetProductsByIds
    [HttpPost("GetProductsByIds")]
    public async Task<ActionResult<List<ProductDTO>>> GetProductsByIds(List<int> productIds)
    {
        var products = await _context.Products
            .Include(p => p.Subcategory)
            .Where(p => productIds.Contains(p.ProductId))
            .Select(p => new ProductDTO
            {
                ProductId = p.ProductId,
                Title = p.Title,
                SubcategoryId = p.SubcategoryId,
                Price = p.PriceNow,
                ImageUrl = p.ImageUrl
            })
            .ToListAsync();

        if (products == null || products.Count == 0) return new List<ProductDTO>();

        return products;
    }


    // GET: api/Product/OnPromo
    [HttpGet("OnPromo")]
    public async Task<ActionResult<List<Product>>> GetProductsOnPromo()
    {
        var products = await _context.Products
            .Where(p => p.OnPromo == true)
            .ToListAsync();

        if (products == null || products.Count == 0) return new List<Product>();

        return products;
    }
}