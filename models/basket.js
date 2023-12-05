class Basket {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(item){
        const index_of_item_to_remove = this.items.indexOf(item)
        this.items.splice(index_of_item_to_remove, 1)
    }

    removeAll(){
        this.items = []
    }

    totalPrice(){
        let total_basket_price = 0
        for(let i = 0; i < this.items.length; i++){
            total_basket_price += this.items[i].price
        }
        return total_basket_price
    }
}
module.exports = Basket