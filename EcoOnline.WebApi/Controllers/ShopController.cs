using EcoOnline.Model.Interfaces;
using EcoOnline.Model.Models;
using Microsoft.AspNetCore.Mvc;

namespace EcoOnline.WebApi.Controllers
{
    [ApiController]
    [Route("api/shop")]
    public class ShopController : ControllerBase
    {
        private readonly IShopData _shopData;

        public ShopController(IShopData data) {
            _shopData = data;
        }

        [HttpGet("items")]
        public ActionResult<IReadOnlyCollection<ShopItem>> GetBasket() => Ok(_shopData.GetAll());
    }
}
