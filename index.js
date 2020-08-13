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
  constructor(name , name2 , name3){
    this.salad = name ;
  
    this.soup = name2 ;
    this.drink =name3 ;
  }
}

let newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
newlunch.salad;
newlunch.soup;
newlunch.drink ; 