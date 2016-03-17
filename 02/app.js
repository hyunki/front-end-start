// var str = 'hello world!';
// console.log(str);

// var nick = 'my nick is \'aji\'';
// console.log(nick);

var man = {
    name : 'aj',
    age : 30,
    hobby : 'bike'
};

for (var count = 0; count < 5; count++) {
  console.log(count);
}

function sum(x){
    var y = 1;
    return x+y; //return 문이 없을경우 undefined반환
}

var z = sum(10);
console.log(z + sum(10));

//
// if (man.age > 30) {
//   console.log("old");
// } else if (man.age > 20) {
//   console.log("young");
// } else {
//   ;
// }
