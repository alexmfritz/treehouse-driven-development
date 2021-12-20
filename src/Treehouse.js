class Treehouse {
  constructor(price, beds, bath, location) {
    this.price = price;
    this.pricePoint = '';
    this.bedrooms = beds;
    this.bathrooms = bath;
    this.location = location;
    this.isBooked = false;
  }

  discountPrice(x) {
    this.price *= ((100 - x)/100);
  }

  determinePricePoint() {
    switch (this.price) {
      case (this.price <= 100):
        this.pricePoint = '$';
      case (100 < this.price <= 200):
        this,pricePoint = '$$';
      default:
        this.pricePoint = '$$$';
    }
  }
}

module.exports = Treehouse;