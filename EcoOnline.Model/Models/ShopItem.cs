namespace EcoOnline.Model.Models;

public class ShopItem
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public decimal Price { get; set; }
    public decimal DiscountPercentage { get; set; }
}
