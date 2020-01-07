const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur_two;
  let dinosaur_three;

  beforeEach(function () {
    park = new Park('Jurassic Park', 35);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_two = new Dinosaur('diplodocus', 'herbivore', 35);
    dinosaur_three = new Dinosaur('stegasaurus', 'herbivore', 30);

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur_two);
    park.addDinosaur(dinosaur_three);
    park.removeDinosaur(dinosaur_three);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
