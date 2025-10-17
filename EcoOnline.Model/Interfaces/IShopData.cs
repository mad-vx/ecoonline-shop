using EcoOnline.Model.Models;

namespace EcoOnline.Model.Interfaces
{
    public interface IShopData
    {
        IReadOnlyCollection<ShopItem> GetAll();
        ShopItem? GetById(int id);
    }
}
