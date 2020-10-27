var mensaje;
for (let i = 1; i <= 500; i++) {
    mensaje = `${i} `;
    if ((i % 4) == 0)
        mensaje += "(Múltiplo de 4) ";
    if ((i % 9) == 0)
        mensaje += "(Múltiplo de 9) ";
    console.log(mensaje);
    if ((i % 5) == 0)
        console.log("—————————————————————\n");
}