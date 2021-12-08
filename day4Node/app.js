class Food{
  constructor(food ,drink, description){
    this.food = food
    this.drink = drink 
    this.description = description

  }

  printInfo() {
    console.log(`
    Ramen: ${this.food}
    `)

  }

}

const ramen1 = new Food('Tonkotsu')
const ramen2 = new Food('Shoyu')
const ramen3 = new Food('Miso')
const ramen4 = new Food('Spicy miso')


ramen1.printInfo()
ramen2.printInfo()
ramen3.printInfo()
ramen4.printInfo()