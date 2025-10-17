namespace EcoOnline.Model.Models;

public sealed class Basket
{
    private readonly Dictionary<int, ShopItem> items = new Dictionary<int, ShopItem>();

    public IReadOnlyCollection<ShopItem> Items => items.Values;

    public Basket() {
    }
}
