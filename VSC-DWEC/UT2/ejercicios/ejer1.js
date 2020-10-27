
var array=[1.63, 1.50, 1.35, 1.90, 1.75];
var fltMin=5.0;
var fltMax=0.0;
var fltMedia=0.0;
var longitud=array.length;

var i;
for(i of array){
    if(i>fltMax){
        fltMax=i;
    }
    if(i<fltMin){
        fltMin=i;
    }
    fltMedia+=i;
}
fltMedia/=longitud;
var strMedia= fltMedia.toFixed(2);

console.log(`Maximo: ${fltMax}\nMinimo: ${fltMin}\nMedia: ${strMedia}\nNumero de valores: ${longitud}\n`);