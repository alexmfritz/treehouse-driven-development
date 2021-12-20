class Customer {
  constructor(budget) {
    this.budget = budget;
    this.bookings = [];
  }

  determineBudget(treehouse) {
    if (this.budget >= treehouse.price) {
      this.bookings.push(treehouse);
      this.budget -= treehouse.price;
      treehouse.isBooked = true;
      return true;
    }
    console.log('Sorry, you do not have the funds necessary to complete this transaction at this time!');
    return false;
  }


}

module.exports = Customer;