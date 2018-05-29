import { animal } from './../src/animalfarm.js';

describe('animal', function() {
 let cow = animal;

 beforeEach(function() {
   jasmine.clock().install();
   cow.name = "Antony";
   cow.type = "cow";
   cow.setRebel();
   cow.setSick();
   cow.foodLevel = 10;
   cow.healthLevel = 10;
   cow.happiness = 10
 });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(cow.name).toEqual("Antony");
    expect(cow.foodLevel).toEqual(10);
    expect(cow.healthLevel).toEqual(10);
    expect(cow.happiness).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(cow.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
   cow.foodLevel = 0;
   cow.healthLevel = 0;
   cow.happiness = 0;
   expect(cow.didYourAnimalRebel()).toEqual(true);
 });

 it('should get sick if 5 seconds pass without care', function() {
   jasmine.clock().tick(5001);
   expect(cow.isSick()).toEqual(true);
 });

 it('should get very hungry if 10 seconds pass without feeding, care or grooming', function() {
   jasmine.clock().tick(10001);
   expect(cow.didYourAnimalRebel()).toEqual(true);
 });

 it('should have a food level of ten if it is fed', function() {
   jasmine.clock().tick(3001);
   cow.eatSmall("test");
   expect(cow.foodLevel).toEqual(10);
 });

 it('should have a happiness level of ten if it is groomed', function() {
   jasmine.clock().tick(3001);
   cow.groomLittle("test");
   expect(cow.happiness).toEqual(10);
 });

 it('should have a health level of ten if it is cared for', function() {
   jasmine.clock().tick(5001);
   cow.care(3);
   expect(cow.healthLevel).toEqual(3);
 });
});
