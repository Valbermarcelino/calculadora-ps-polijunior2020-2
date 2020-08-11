function atribuirCampos(json) {
    const data = json;
    document.getElementById("materia").innerHTML = data.materia;
    document.getElementById("nota_p1").innerHTML = data.nota_p1;
    document.getElementById("nota_p2").innerHTML = data.nota_p2;
    //document.getElementById("nota_p3").innerHTML = data.nota_p3;
    document.getElementById("peso_p1").innerHTML = data.peso_p1;
    document.getElementById("peso_p2").innerHTML = data.peso_p2;
    document.getElementById("peso_p3").innerHTML = data.peso_p3;
    document.getElementById("media").innerHTML = data.media_pretendida;
}

function calculoMedia(data) {
    const p1 = data.nota_p1;
    const p2 = data.nota_p2;

    const peso_p1 = data.peso_p1;
    const peso_p2 = data.peso_p2;
    const peso_p3 = data.peso_p3;

    const nota = data.media_pretendida;

    const p3 = ((peso_p1 + peso_p2 + peso_p3)*nota - (p1*peso_p1 + p2*peso_p2))/peso_p3;

    const necessario =  Math.round(p3 * 100) / 100;

    if(necessario > 0){
        document.getElementById("nota_p3").innerHTML = necessario;
    } else {
        document.getElementById("nota_p3").innerHTML = 0;
    }
}

 function chamada(numero){
    fetch('https://api.polijunior.com.br/notas/' + numero)
        .then(response =>{
            return response.json();
        })
        .then(json => {
            //alert(json);
            //console.log(json);
            atribuirCampos(json);

            calculoMedia(json);
        })
}