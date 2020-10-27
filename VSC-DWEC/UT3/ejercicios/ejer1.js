var array = ["Real Madrid", "Unicaja", "Juventud", "Gran Canaria"];
array.forEach(element => {
    if(-1!=element.search(" "))
    console.log(element);
});