window.onload = function(){ assert(true, 'power!'); };

var ninja = {
  shout: function(){
    assert(true, "Ninja");
  }
};

ninja.shout();

setTimeout(
  function(){ assert(true, 'Forever!'); },
  500);


// Closures bind values at the very last moment

function assignTorpedo(name, passengerArray) {
  var torpedoAssignment;
  for (var i = 0; i < passengerArray; i++) {
    if (passengerArray[i] == name) {
      torpedoAssignment = function(){
        alert("Ahoy, " + name + "!\n" +
          "Man your post at Torpedo #" + (i + 1) + "!");
      };
    }
    return torpedoAssignment;
  }
}
// This will run the loop for ALL the items in array
function assignTorpedo(name, passengerArray) {
  for (var i = 0; i < passengerArray; i++) {
    if (passengerArray[i] == name) {
      return function(){
        alert("Ahoy, " + name + "!\n" +
          "Man your post at Torpedo #" + (i + 1) + "!");
      };
    }
  }
}

// This will return function at first instance of true
function makeTorpedoAssigner(passengerArray) {
      return function(name){
        for (var i = 0; i < passengerArray; i++) {
          if (passengerArray[i] == name) {
            alert("Ahoy, " + name + "!\n" +
                  "Man your post at Torpedo #" + (i + 1) + "!");
          }
        }
      };
}

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var times5 = multiplier(5);
times5(4) => 20

var bookArray = ["The Great Gatsby", "The Sea Wolf", "Where the Wild Things Are"];
var myBox = {
  height: 6,
  width: 5,
  length: 4,
  volume: 460,
  destination1: "Orlando",
  destination2: "Florida",
  "# of stops": 2,
  "# of Books": 0
};

for (var i = 1; i < myBox["# of stops"]; i++) {
  console.log(myBox["destination" + i]);
}

function addBook(box, name, writer){
  box["# of Books"]++;
  box["book" + box["# of Books"]] = {title: name, author: writer};
}


























































