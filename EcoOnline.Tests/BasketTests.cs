using EcoOnline.Model.Models;

namespace EcoOnline.Tests;

public class BasketTests
{
    [Fact]
    public void Create_Basket()
    {
        var basket = new Basket();
        Assert.NotNull(basket);
    }
}