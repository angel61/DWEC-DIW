var funcionMedia = (...parametros) => {
    let media = 0;
    let cont = 0;
    parametros.forEach(element => {
        if (element <= 2) {
            media += element;
            cont++;
        }
    });
    media=media/cont;
    return `La media seria: ${media}`;
}

console.log(funcionMedia(1,2,4,6,7,4,3,2));