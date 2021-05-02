let fruit = {
  type: "banana",
  humanize: function () { /*in part 2, we used the 'this'     keyword, we got to the 'global object' this time we       going to create an object with a function and property    named 'type' */

    



    console.log (`Although i am ${this.type}, i can still talk!`);

  }


}

let weirdFunction = fruit.humanize;
weirdFunction();


/*
let weirdFunction = function () {
  console.log (`Although I am ${this,type} I can still talk!`);
};
*/

/*uncomment the code above, you get a 'undefined', why? our varible has got a function as a value, 'this' keyword in that function no longer as any connection with the 'fruit' object.
that is because 'this' is et when we excute the function, not when we define it, we get to the 'global object', not the 'fruit' object--check out the 'getting object values' */


