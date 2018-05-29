export let animal = {
    type: "unknown",
    name: "any",
    foodLevel: 10,
    healthLevel: 10,
    happiness: 10,

    setRebel: function() {
      const hungerInterval = setInterval(() => {
        this.foodLevel--;
        this.healthLevel -= 2;
        this.happiness--;
        if (this.didYourAnimalRebel() == true) {
          clearInterval(hungerInterval);
          return "Your " + this.type + " " + this.name + " rebelled!";
        }
      }, 1000);
    },
    setSick: function() {
      if (this.isSick()) {
        this.happiness--;
        return "Your " + this.type + " " + this.name + " got sick! Please take care of it!";
      }
    },
    isSick: function() {
      if (this.healthLevel > 0 && this.foodLevel > -5) {
        return false;
      } else {
        return true;
      }
    },
    didYourAnimalRebel: function() {
      if (this.foodLevel > 0 && this.healthLevel > 0 && this.happiness > 0) {
        return false;
      } else {
        return true;
      }
    },
    feed: function(amount) {
      let that = this;
      return function(food) {
        that.foodLevel += amount;
        return `The ${that.name} ate the ${food}! Food level goes up ${amount}!`
      }
    },
    groom: function(amount) {
      let that = this;
      return function(activity) {
        that.happiness += amount;
        return `The ${that.name} get ${activity}! Happiness level goes up ${amount}!`
      }
    },
    care: function(amount) {
      this.healthLevel += amount;
      return `The ${this.name} was taken care off! Health level goes up ${amount}!`
    }
};
animal.eatSmall = animal.feed(3);
animal.eatMedium = animal.feed(10);
animal.eatLarge = animal.feed(15);
animal.eatYuck = animal.feed(-10);
animal.eatPowerUp = animal.feed(50);
animal.eatSpecialBonus = animal.feed(100);
animal.eatWeirdThing = animal.feed(Math.floor((Math.random() * 20) - Math.floor((Math.random() * 20) + 1)));

animal.groomLittle = animal.groom(3);
animal.groomMedium = animal.groom(10);
animal.groomLarge = animal.groom(15);
animal.groomYuck = animal.groom(-10);
