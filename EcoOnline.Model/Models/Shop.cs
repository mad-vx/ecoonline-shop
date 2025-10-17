namespace EcoOnline.Model.Models;

public class Shop
{
    public required IReadOnlyCollection<ShopItem> ShopItems { get; set; }

    public Shop() { 
        ShopItems = new List<ShopItem>();
        
    }
}
