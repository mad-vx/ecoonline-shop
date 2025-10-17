using EcoOnline.Model.Interfaces;

namespace EcoOnline.Model.Models
{
    public sealed class InMemoryShopData : IShopData
    {
        private readonly Dictionary<int, ShopItem> _items;

        public InMemoryShopData(IEnumerable<ShopItem> shopItems)
        {
            _items = shopItems.ToDictionary(x => x.Id, x => new ShopItem
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Price = x.Price,
                DiscountPercentage = x.DiscountPercentage
            });
        }

        public IReadOnlyCollection<ShopItem> GetAll() => _items.Values;

        public ShopItem? GetById(int id) => _items.TryGetValue(id, out var item) ? item : null;

        public static InMemoryShopData CreateData() => new InMemoryShopData(new[]
        {
            new ShopItem { Id = 1, Name = "Hard Hat",  Description = "Durable, HDPE Yellow safety hat ", Price = 12.99m, DiscountPercentage = 0m },
            new ShopItem { Id = 2, Name = "Safety Gloves", Description = "General safety gloves (pack of 2)", Price = 9.50m, DiscountPercentage = 10m },
            new ShopItem { Id = 3, Name = "Dust Mask", Description = "Valved particle respirator", Price = 17.25m, DiscountPercentage = 0m },
            new ShopItem { Id = 4, Name = "Work Boots", Description = "V12 Footwear Rhino", Price = 28.75m, DiscountPercentage = 10m },
        });
    }
}
