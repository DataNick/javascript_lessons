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

