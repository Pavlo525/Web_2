
class main {
    Arr = []

    constructor(name) {
        this.name = name
        this.Arr.push(this.name)
    }

    pushPoint(name = String) {
        this.Arr.push(name)
    }

    getPoint() {
        console.log(this.Arr)
    }

    editPoint(number = Number, name = String) {
        this.Arr[number] = name
    }

    deletePoint(number = Number) {
        this.Arr.splice(number, number)
    }

    searchPoint(name = String) {
        return this.Arr.includes(name)
    }

}
class Shop extends main {

}
class Goods extends main {

}
class Storage extends main {
}

class GoodsInStorage extends Goods{
    arr = []


    transfer(name = String, place, placeTo){
        placeTo.arr.push(name)
        this.deleter2(place.indexFind2(name), place)
    }
    departure(name = String, place, placeTo){
        placeTo.Arr.push(name)
        this.deleter2(place.indexFind2(name), place)
    }

    getarr(){
        console.log(this.arr)
    }

    indexFind(name = String){
        return goods.Arr.indexOf(name)
    }
    indexFind2(name = String){
        return goodsInStorage.arr.indexOf(name)
    }
    pushPoint2(name = String) {
        this.arr.push(name)
        this.deleter(goodsInStorage.indexFind(name), goods)
    }
    deleter(number, name){
        name.Arr.splice(number, number)
    }
    deleter2(number){
        this.arr.splice(number, number)
    }

}

console.log('клас shop')
let shop = new Shop('First')
shop.pushPoint("qwer")
shop.pushPoint("123")
shop.getPoint()
shop.editPoint(1, "www")
shop.getPoint()
shop.deletePoint(1)
shop.getPoint()

console.log('клас goods')
let goods = new Goods('First')
goods.pushPoint("qwer")
goods.pushPoint("123")
goods.pushPoint("aa")
goods.pushPoint("bb")
goods.pushPoint("cc")
goods.getPoint()
goods.editPoint(1, "www")
goods.getPoint()
goods.deletePoint(1)
goods.getPoint()
console.log("масив")
console.log(goods.Arr)


console.log('клас GoodsInStorage')
let goodsInStorage = new GoodsInStorage("secons")
goodsInStorage.pushPoint("qwer")
goodsInStorage.pushPoint("123")
goodsInStorage.pushPoint("aa")
goodsInStorage.pushPoint("bb")
goodsInStorage.pushPoint("cc")
goodsInStorage.getPoint()
goodsInStorage.editPoint(1, "www")
goodsInStorage.getPoint()
goodsInStorage.deletePoint(1)
goodsInStorage.getPoint()

console.log("доставка товару на 1 склад")
goodsInStorage.pushPoint2("123")
goodsInStorage.pushPoint2("aa")
goodsInStorage.pushPoint2("bb")

console.log('клас перевірка видалення')
goods.getPoint()

console.log("доставка товару з першого складу на 2 склад")
let goodsInStorage2 = new GoodsInStorage()

goodsInStorage.transfer("aa", goodsInStorage, goodsInStorage2)
goodsInStorage.transfer("bb", goodsInStorage, goodsInStorage2)
console.log('клас перевірка видалення')
console.log(goodsInStorage.arr)

console.log("доставка товару з першого складу до магазину")

goodsInStorage.departure("bb", goodsInStorage, shop)

shop.getPoint()