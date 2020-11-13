var texto=""
var n=5;
var array=[]
for(var fila=0;fila<n;fila++){
    array[fila]=[]
    for(var col=0;col<n;col++){
        //Si es la primera fila
        if(fila==0){
            //El valor de cada columna seria la posicion de la columna
            array[fila][col]=col+1;


        }
        
        //Si es la ultima fila
        if(fila==(n-1)){
            //El valor de cada columna seria n * 2 - 1 mas la posicion de la columna 
            array[fila][col]=((n*2)-1)+col;
        }

        //Si no es ni la primera o la ultima fila
        if(!(fila==0)&&!(fila==(n-1))){
            //Y si se encuentra en la primera columna
            if(col==0){
                /*El valor de cada columna seria n mas la posicion 
                de la fila en la que nos encontramos*/
                array[fila][col]=(n+fila);
            } 
            
            //Y si se encuentra en la ultima columna
            if(col==(n-1)){
                //El valor de cada columna seria (n + ((n - 1) * 2) - (fila - 1)
                array[fila][col]=(n+((n-1)*2)+(n-2))-(fila-1);
            }
            
            if(!(col==0)&&!(col==(n-1))){
                array[fila][col]="";
            }
        }
    }
}
for (let linea of array) {
    console.log(linea);
}
