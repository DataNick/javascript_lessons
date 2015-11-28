var number = 5;
while (number >= 1) {
  console.log(number);
  number--;
}
console.log("Blast off!");
alert("Checking alert function");


var gotName = false;
while(gotName == false) {
  var username = prompt("What is your name?");
  if( confirm("Are you sure your name is " + username + "?")) {
    alert("Hey there " + username + "!");
    gotName = true
  }
}
console.log(username)

function getName (list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (typeof(list[i] == "string")) {
      count++;
      console.log(i + "is a string at index " + list[i]);
    }
  }
  return count
};