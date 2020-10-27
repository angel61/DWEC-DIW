var array = ["IBM", "ASUS", "TOSHIBA", "APPLE"];
array.forEach(element => {
    if(-1!=element.search("A"))
    console.log(element);
});