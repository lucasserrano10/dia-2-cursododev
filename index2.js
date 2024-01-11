// esta com fome ?
let fome = (prompt("está com fome ? *(sim/nao)"))

// tem dinheiro ?
let dinheiro = (prompt("tem dinheiro ? (sim/nao"))

// restaurante esta aberto ?
let restaurante = (prompt("restaurante esta aberto ? (sim/nao)"))

if( fome === "nao" && dinheiro === "nao"){
    console.log("hoje a janta será em casa !")
}else if(fome === "sim" && dinheiro === "sim" && restaurante === "nao"){
    console.log("peça um delivery !")
}else{
    console.log("vá a seu restaurante preferido !")
}

