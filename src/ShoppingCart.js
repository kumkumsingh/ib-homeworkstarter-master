class ShoppingCart {

    constructor() {
        // this.itemName = name
        // this.price = price
        // this.quantity = quantity
        this.items = []
    }

    addItem(itemName, quantity, price) {

        return this.items.push({ name: itemName, quantity: quantity, pricePerUnit: price })
    }
    getItems() {

        return this.items
    }

    clear() {

        return this.items = []
    }

    total() {
        if (this.items.length === 0) {
            return 0
        }
        const newTotal = this.items.reduce((accumulator, currentvalue) => {

            //return accumulator+(currentvalue.pricePerUnit * currentvalue.quantity)

            accumulator.pricePerUnit = (accumulator.pricePerUnit) + (currentvalue.pricePerUnit * currentvalue.quantity)
            return accumulator

        })

        return parseFloat(newTotal.pricePerUnit)
    }
}

const cart = new ShoppingCart()
module.exports = ShoppingCart;