
  function Cart(items = []) {
    this.goods = items;
    this.totalPrice = 0;
    this.count = 0;
  }
  
  Cart.prototype.calculateGoodsPrice = function() {
    this.totalPrice = this.goods.reduce(
      (total, item) => total + item.price - item.discount,
      0
    );
  };
  
  Cart.prototype.addGoods = function(goods) {
    this.goods.push(goods);
    this.increaseCount();
    this.calculateGoodsPrice();
  };
  
  Cart.prototype.getTotalPrice = function() {
    return this.totalPrice;
  };
  
  Cart.prototype.increaseCount = function() {
    this.count++;
  };
  
  Cart.prototype.clear = function() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
  };
  
  Cart.prototype.print = function() {
    console.log(JSON.stringify(this.goods));
    console.log("Total", this.totalPrice);
  };

  function Goods(name, price, discount = 0) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
  
  function FoodGoods(name, price, discount, calorie) {
    Goods.call(this, name, price, discount);
    this.calorie = calorie;
  }
  FoodGoods.prototype = Object.create(Goods.prototype);
  FoodGoods.prototype.constructor = FoodGoods;
  
  function ClothingGoods(name, price, discount, material) {
    Goods.call(this, name, price, discount);
    this.material = material;
  }
  ClothingGoods.prototype = Object.create(Goods.prototype);
  ClothingGoods.prototype.constructor = ClothingGoods;
  
  function TechnicsGoods(name, price, discount, equipmentType) {
    Goods.call(this, name, price, discount);
    this.equipmentType = equipmentType;
  }
  TechnicsGoods.prototype = Object.create(Goods.prototype);
  TechnicsGoods.prototype.constructor = TechnicsGoods;
  

  const food = new FoodGoods("Apple", 1.99, 0, 52);
  const clothing = new ClothingGoods("T-Shirt", 19.99, 0, "Cotton");
  const technics = new TechnicsGoods("Headphones", 99.99, 0, "Audio");
  
  const cart = new Cart();
  cart.addGoods(food);
  cart.addGoods(clothing);
  cart.addGoods(technics);
  

  cart.print();
  