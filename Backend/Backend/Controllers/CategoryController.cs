using Backend.Models;
using Backend.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoryController : ControllerBase
{
    private readonly PrimeStoreDbContext _context;

    public CategoryController(PrimeStoreDbContext context)
    {
        _context = context;
    }

    // GET: api/Category/5/Subcategories
    [HttpGet("/{id}")]
    public async Task<ActionResult<IEnumerable<SubcategoryDTO>>> GetSubcategories(int id)
    {
        var category = await _context.Categories.Include(c => c.Subcategories)
            .FirstOrDefaultAsync(c => c.CategoryId == id);

        if (category == null) return NotFound();

        var subcategories = category.Subcategories.Select(s => new SubcategoryDTO
        {
            SubcategoryId = s.SubcategoryId,
            Name = s.Name,
            ImageName = s.ImageName
        });

        return subcategories.ToList();
    }
}