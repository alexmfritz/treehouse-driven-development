const chai = require('chai');
const expect = chai.expect;
const Treehouse = require('../src/Treehouse');
const Customer = require('../src/Customer');


describe('Customer', () => {
  let waTreehouse;
  let customer1;
  let customer2;
  let goodBudget;

  beforeEach(() => {
    waTreehouse = new Treehouse(250, 3, 1.5, "Fall City, Washington");
    customer1 = new Customer(750);
    customer2 = new Customer(225);
    goodBudget = customer1.determineBudget(waTreehouse);
  });

  it('should be able to keep track of their budget', () => {
    expect(customer1).to.have.a.property('budget');
  })

  it('should have a budget of a number', () => {
    expect(customer1.budget).to.be.a('number');
  })

  it('should be able to keep track of their bookings', () => {
    expect(customer2).to.have.a.property('bookings');
  })

  it('should have no bookings by default', () => {
    expect(customer2.bookings).to.deep.equal([]);
  })

  it('should be able to determine if their budget is enough', () => {
    let badBudget = customer2.determineBudget(waTreehouse);
    expect(goodBudget).to.deep.equal(true);
    expect(badBudget).to.deep.equal(false);
  })

  it('should be able to add to their bookings if budget is enough', () => {
    customer2.determineBudget(waTreehouse);

    expect(customer1.bookings.length).to.deep.equal(1);
    expect(customer2.bookings.length).to.deep.equal(0);
  })

  it('should reduce the price if they are able to book the treehouse', () => {
    expect(customer1.budget).to.deep.equal(500);
  })

  it('should not reduce the price if they are unable to book the treehouse', () => {
    customer2.determineBudget(waTreehouse);

    expect(customer2.budget).to.deep.equal(225);
  })

  it('should update the treehouse to show that it has been booked', () => {
    expect(waTreehouse.isBooked).to.deep.equal(true);
  })

  it('should not update the treehouse to show that is has been booked if budget is low', () => {
    let notBooked = customer2.determineBudget(waTreehouse);
    expect(notBooked).to.deep.equal(false);
  })
})