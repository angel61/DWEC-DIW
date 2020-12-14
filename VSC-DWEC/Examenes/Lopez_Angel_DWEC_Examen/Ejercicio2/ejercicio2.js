
var btnDias=document.getElementById("dias");
var abrirVentana=()=>{
    let ventana=window.open("./diasFestivos.html","a","100px,100px");
}
btnDias.onclick=abrirVentana;

//2.2
var parrafo=document.getElementById("idEtiquetaP");
var texto=parrafo.innerHTML.toString().toLowerCase();
var arrayVocales=["a","e","i","o","u"];
var nVocale=0;
var nConsonantes=0;

for(i=0;i<texto.length;i++){
    if(arrayVocales.includes(texto.charAt(i))){
        nVocale++;
    }else{
        nConsonantes++;
    }
}
console.log(`Numero de vocales: ${nVocale}\nNumero de consonantes: ${nConsonantes}`);