var miArray = ["H", "o", "l", "a", " ", "m", " ", " ", " ", " ","u", "n", "d", "o"];

console.log(miArray.join(""));
while(miArray.includes(" "))
    miArray.splice(miArray.indexOf(" "),1);
console.log(miArray.join(""));