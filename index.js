function limparCampos() {
    document.getElementById("name").value = ""; 
    document.getElementById("xp").value = ""; 
    document.querySelector(".tipos").innerHTML = ""; 
}

function verificarXP(){
    var nome = document.getElementById("name").value;
    var quantidadeXP = document.getElementById("xp").value;
    var tipos = document.querySelector(".tipos");
    if(nome === ""){
        alert('Campo nome não pode ser nulo');
    }else if(quantidadeXP === ''){
        alert('Campo XP não pode ser nulo');    
    }else{
        switch(true) {
            case quantidadeXP <= 1000:
                
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Ferro";
                break;
            case quantidadeXP <= 2000:
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Bronze";
                break;
            case quantidadeXP <=2001:
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Prata";
                break;
            case quantidadeXP <=5001:
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Ouro";
                break;
            case quantidadeXP <=7001:
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Platina";
                break;
            case quantidadeXP <=8001:
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Ascendente";
                break;
            case quantidadeXP <=9001:
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Imortal";
                break;
            default:
                tipos.innerHTML = "O herói de nome " +nome+" está no nivel: "+"Radiante";
                break;
        }
    }
}