//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  //code here

String.prototype.reverse = function() {
  var array = this.split("");
  array.reverse();
  //this = array.join("");
  return array.join("");
};

console.log("ABCDEFG".reverse());
