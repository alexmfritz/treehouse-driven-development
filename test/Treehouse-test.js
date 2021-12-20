const chai = require('chai');
const expect = chai.expect;

const Treehouse = require('../src/Treehouse');

describe('Treehouse', () => {
  let waTreehouse;

  beforeEach(() => {
    waTreehouse = new Treehouse(250, 3, 1.5, "Fall City, Washington");
  })

  it('should be able to store a price', () => {
    expect(waTreehouse).to.have.a.property('price');
  })

  it('should have a price that is a number', () => {
    expect(waTreehouse.price).to.be.a('number');
  })

  it('should be able to store its price point', () => {
    expect(waTreehouse).to.have.a.property('pricePoint');
  })

  it('should be able to keep track of its bedrooms', () => {
    expect(waTreehouse).to.have.a.property('bedrooms');
  })

  it('should have bedrooms that is a number', () => {
    expect(waTreehouse.bedrooms).to.be.a('number');
  })

  it('should be able to keep track of its bathrooms', () => {
    expect(waTreehouse).to.have.a.property('bathrooms');
  })

  it('should have bedrooms that is a number', () => {
    expect(waTreehouse.bathrooms).to.be.a('number');
  })

  it('should have a listed location', () => {
    expect(waTreehouse).to.have.a.property('location');
  })

  it('should have location that is a string', () => {
    expect(waTreehouse.location).to.be.a('string');
  })

  it('should be able to tell if the property is booked', () => {
    expect(waTreehouse).to.have.a.property('isBooked');
  })

  it('should be available to book by default', () => {
    expect(waTreehouse.isBooked).to.deep.equal(false);
  })

  it('should reduce its price by a percentage', () => {
    waTreehouse.discountPrice(20);

    expect(waTreehouse.price).to.deep.equal(200);
  })

  it('should display its pricePoint in a user friendly dollar sign', () => {
    waTreehouse.determinePricePoint();

    expect(waTreehouse.pricePoint).to.deep.equal('$$$');
  })
});