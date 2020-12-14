var contenedor=document.getElementById("contenedor");
var fechaMes=new Date(2021,0,1);
var diasSemana =["D-"];
diasSemana[6]="S-";
for(let i=0;i<=10;i+=2){
    fechaMes.setMonth(i);
    let maxDia=new Date(2021,i,0).getDate();
    for(let u=1;u<=maxDia;u++){
        fechaMes.setDate(u);
        let diaDeLaSemana=fechaMes.getDay();
        if(diaDeLaSemana===6||diaDeLaSemana===0)
        {
            contenedor.innerHTML+=diasSemana[diaDeLaSemana]+fechaMes.toLocaleDateString()+"<br>";
        }
    }
}
