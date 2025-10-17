using EcoOnline.Model.Models;
using Microsoft.AspNetCore.Mvc;

namespace EcoOnline.WebApi.Controllers
{
    [ApiController]
    [Route("api/basket")]
    public class BasketController : ControllerBase
    {
        private readonly Basket _basket;

        public BasketController(Basket basket) { 
            _basket = basket;
        }

        [HttpGet("basket")]
        public ActionResult<Basket> GetBasket() => Ok(_basket);
    }
}
