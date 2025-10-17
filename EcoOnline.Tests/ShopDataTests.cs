using EcoOnline.Model.Models;
namespace EcoOnline.Tests
{
    public class ShopDataTests
    {
        [Fact]
        public void CreateData_Four_Items_With_Expected_Discounts()
        {
            var data = InMemoryShopData.CreateData();

            var all = data.GetAll();
            Assert.Equal(4, all.Count);

            var gloves = all.Single(i => i.Id == 2);
            var boots = all.Single(i => i.Id == 4);

            Assert.Equal(10m, gloves.DiscountPercentage);
            Assert.Equal(10m, boots.DiscountPercentage);
        }

        [Fact]
        public void GetById_Null_When_Not_Found()
        {
            var data = InMemoryShopData.CreateData();
            Assert.Null(data.GetById(999));
        }
    }
}
