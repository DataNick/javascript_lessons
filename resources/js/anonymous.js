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

function add(x) {
  return x + y;
};

function outer_add(y) {
  return add(x);
}

// this will not work. Variable not created in scope of enclosure. Won't have access to it.

function say667() {
  // Local variable that ends up within closure
  var num = 666;
  var sayAlert = function() { alert(num); }
  num++;
  return sayAlert;
}

var sayNumber = say667();
sayNumber(); // alerts 667

function setupSomeGlobals() {
    // Local variable that ends up within closure
    var num = 666;
    // Store some references to functions as global variables
    gAlertNumber = function() { alert(num); }
    gIncreaseNumber = function() { num++; }
    gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gAlertNumber(); // 667
gSetNumber(5);
gAlertNumber(); // 5

var oldAlert = gAlertNumber;

setupSomeGlobals();
gAlertNumber(); // 666

oldAlert() // 5

The three functions have shared access to the same closure — the local variables of setupSomeGlobals() when the three functions were defined.
Note that in the above example, if you call setupSomeGlobals() again, then a new closure (stack-frame!) is created.

var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

var relieveDuty = function (vehicle, day){
  var offDuty = [];
  var onDuty = [];

  for (var i = 1; i <= vehicle.numRangers; i++) {
    if (vehicle["ranger" + i].dayOff == day) {
      offDuty.push(vehicle["ranger" + i]);
    } else {
      onDuty.push(vehicle["ranger" + i]);
  }
    delete vehicle["ranger" + i];
  }

  vehicle.numRangers -= offDuty.length;

  for (var j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger" + j] = onDuty.shift();
  }

  return offDuty;
};

relieveDuty(vehicle3, "Friday");




















































