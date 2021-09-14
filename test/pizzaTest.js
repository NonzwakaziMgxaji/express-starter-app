let assert = require("assert");
let pizza = require("../pizzaFactory");

describe('The pizza function', function() {
    let Pizza = pizza();

    it('should be able to set the pizza size', function () {
        Pizza.pizzaSize("small");
        assert.equal("small" , Pizza.returnPizzaSize());
    });

    it('should be able to check the price for pizza', function () {
        Pizza.pizzaTotal("medium");
        assert.equal(58.99 , Pizza.getMedium());

        Pizza.pizzaTotal("small");
        assert.equal(31.99 , Pizza.getSmall());

        Pizza.pizzaTotal("large");
        assert.equal(87.99 , Pizza.getLarge());
    });
//NOTE TO SELF: PROBLEM WITH MY TESTS. REVISIT FACTORY FUNCTION 
    // it('should be able to check the quantity for pizza', function () {
    //     Pizza.pizzaTotal("medium");
    //     Pizza.pizzaTotal("medium");
    //     Pizza.pizzaTotal("medium");
    //     assert.equal(3 , Pizza.getNumMediumPizza());

    //     Pizza.pizzaTotal("small");
    //     assert.equal(1 , Pizza.getNumSmallPizza());

    //     Pizza.pizzaTotal("large");
    //     assert.equal(1 , Pizza.getNumLargePizza());
    // });

    // it('should be able to calculate the total amount of pizzas', function () {
    //     Pizza.pizzaTotal("small")
    //     Pizza.pizzaTotal("medium")
    //     Pizza.pizzaTotal("large")
    //     assert.equal(276.98 , Pizza.totalAmount());
    // });


});