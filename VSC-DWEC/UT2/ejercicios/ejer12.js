var texto=""
var num=5;
var array=[]
for(var i=0;i<num;i++){
    array[i]=[]
    for(var u=0;u<num;u++){
        if(i==0){
            texto+=(u+1)+" ";
            array[i][u]=u+1;
        }else if(i==(num-1)){
            texto+=(((num*2)-1)+u)+" ";
            array[i][u]=((num*2)-1)+u;
        }else{
            if(u==0){
                texto+=num+i;
                array[i][u]=(num+i);
            }else if(u==(num-1)){
                texto+=(num+((num-1)*2)+(num-2))-(i-1);
                array[i][u]=(num+((num-1)*2)+(num-2))-(i-1);
            }else{
                texto+=" ";
                array[i][u]="";
            }
        }
    }
    texto+="\n";
}
//console.log(texto);
//console.log(array);
for (let algo of array) {
    console.log(algo);
}
