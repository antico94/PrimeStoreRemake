using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Models.DTOs;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubcategoryController : ControllerBase
    {
        private readonly PrimeStoreDbContext _context;

        public SubcategoryController(PrimeStoreDbContext context)
        {
            _context = context;
        }

        // GET: api/Subcategory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Subcategory>>> GetAll()
        {
            var subcategories = await _context.Subcategories.ToListAsync();
            if (subcategories == null)
            {
                return NotFound();
            }
            return subcategories;
        }
        
        // GET: api/Subcategory/{id}/Products
        // GET: api/Subcategory/{subcategoryId}/products
        [HttpGet("{subcategoryId}/products")]
        public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProducts(int subcategoryId)
        {
            var products = await _context.Products
                .Where(p => p.SubcategoryId == subcategoryId)
                .Select(p => new ProductDTO
                {
                    ProductId = p.ProductId,
                    Title = p.Title,
                    SubcategoryId = p.SubcategoryId,
                    Price = p.PriceNow,
                    ImageUrl = p.ImageUrl
                })
                .ToListAsync();

            if (products == null)
            {
                return NotFound();
            }

            return products;
        }
    }
}