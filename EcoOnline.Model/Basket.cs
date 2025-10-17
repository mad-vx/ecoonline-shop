namespace EcoOnline.Model;

public sealed class Basket
{
    private readonly Dictionary<int, ShopItem> items = new Dictionary<int, ShopItem>();

    public IReadOnlyCollection<ShopItem> Items => items.Values;

    public Basket() {
        items.Add(1, new ShopItem { Description = "Shop Item 1 Description", Name = "Shop Item 1", Id = 1, Price = 3.5M });
        items.Add(2, new ShopItem { Description = "Shop Item 2 Description", Name = "Shop Item 2", Id = 2, Price = 9.0M });
        items.Add(3, new ShopItem { Description = "Shop Item 3 Description", Name = "Shop Item 3", Id = 3, Price = 12.7M });
    }
}
