module.exports = function pizza() {
    let sizeOfPizza="";
    let smallPizza = 0;
    let mediumPizza = 0;
    let largePizza = 0;
    let numSmallPizza = 0;
    let numMediumPizza = 0;
    let numLargePizza = 0;
    let total = 0;
    let order = [];
    let id = 0;

    function pizzaSize(size){
        sizeOfPizza = size;
    }

    function returnPizzaSize(){
        return sizeOfPizza;
    }

    function pizzaTotal(size) {
        if(size === "small"){
            smallPizza += 31.99
            numSmallPizza++
        } else if(size === "medium"){
            mediumPizza += 58.99
            numMediumPizza++
        } else if(size === "large"){
            largePizza += 87.99
            numLargePizza++
        }
    }

    function getSmall(){
        return smallPizza.toFixed(2);
    }

    function getMedium(){
        return mediumPizza.toFixed(2);;
    }

    function getLarge(){
        return largePizza.toFixed(2);;
    }

   

    function totalAmount(){
        total = smallPizza + mediumPizza + largePizza;
        if(total > 0){
            id += 1;

            order.push({
                id: id,
                status: "payment due",
                totalAmount: total
            });
        }
        
        return total.toFixed(2); 
    }

    function getId(){
        return id++
    }

    function getNumSmallPizza(){
        return numSmallPizza;
    }

    function getNumMediumPizza(){
        return numMediumPizza;
    }

    function getNumLargePizza(){
        return numLargePizza;
    }

    function thisIsAnOrder(){
        return order
    }

    return {
        pizzaSize,
        returnPizzaSize,
        pizzaTotal,
        getSmall,
        getMedium,
        getLarge,
        totalAmount,
        getNumSmallPizza,
        getNumMediumPizza,
        getNumLargePizza,
        thisIsAnOrder,
        getId
    }
}