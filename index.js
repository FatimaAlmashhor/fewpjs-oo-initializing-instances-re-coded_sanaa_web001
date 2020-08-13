// Write your code here
class Breakfast {
  constructor(name , name2){
    this.food = name ; 
    this.drink = name2 ;
  }
}

let bfast = new Breakfast('eggs', 'juice')
bfast.food ;
bfast.juice;

class Lunch {
  constructor(name , name2){
    this.food = name ; 
    this.drink = name2 ;
  }
}

newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
    expect(newlunch.salad).to.equal('side salad')
    expect(newlunch.soup).to.equal('broccoli cheddar soup')
    expect(newlunch.drink).to.equal('iced tea')