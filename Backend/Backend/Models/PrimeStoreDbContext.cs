using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

public class PrimeStoreDbContext : DbContext
{
    // Add DbSet properties for your entities here
    public DbSet<Brand> Brands { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Subcategory> Subcategories { get; set; }
    public DbSet<Category> Categories { get; set; }
    

    public PrimeStoreDbContext(DbContextOptions<PrimeStoreDbContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .HasOne(p => p.Brand)
            .WithMany(b => b.Products)
            .HasForeignKey(p => p.BrandId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Product>()
            .HasOne(p => p.Subcategory)
            .WithMany(s => s.Products)
            .HasForeignKey(p => p.SubcategoryId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Subcategory>()
            .HasMany(s => s.Products)
            .WithOne(p => p.Subcategory)
            .HasForeignKey(p => p.SubcategoryId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Brand>()
            .HasMany(b => b.Products)
            .WithOne(p => p.Brand)
            .HasForeignKey(p => p.BrandId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Product>()
            .Property(p => p.PriceBefore)
            .HasColumnType("decimal(18,2)");

        modelBuilder.Entity<Product>()
            .Property(p => p.PriceNow)
            .HasColumnType("decimal(18,2)");
    }
}
