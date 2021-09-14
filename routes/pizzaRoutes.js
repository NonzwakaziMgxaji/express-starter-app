const pizzas = require('../pizzaFactory');

module.exports = function routes(pizza) {
    function home(req, res, next) {
        try {
            res.render('index', {
                smallCost: pizza.getSmall(),
                mediumCost: pizza.getMedium(),
                largeCost: pizza.getLarge(),
                smallNum: pizza.getNumSmallPizza(),
                mediumNum: pizza.getNumMediumPizza(),
                largeNum: pizza.getNumLargePizza(),
                totalCost: pizza.totalAmount()
            })
        } catch (error) {
            console.log(error);
        }
    }

    function addPizzas(req, res, next) {
        try {
            pizza.pizzaSize(req.body.buyBtn)
            pizza.pizzaTotal(req.body.buyBtn)
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

    function orders(req, res, next) {
        try {
            res.render('order', {
                orders: pizza.thisIsAnOrder()
            });
        } catch (error) {
            console.log(error);
        }
    }

    return {
        home,
        addPizzas,
        orders
    }
}