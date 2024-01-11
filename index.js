

// informações do usuario
let nome = prompt("Qual é o seu nome ?")
let idade = parseInt(prompt("Qual é sua idade ?"))
let TemCarro = prompt("Você tem carro ?(Sim/Não)")
let TemCarta = prompt("Você tem carta ? (Sim/Não)")

if(TemCarro == "Sim"){
    TemCarro = true
}else{
    TemCarro = false
}
if(TemCarta == "Sim"){
    TemCarta = true
}else{
    TemCarta = false
}
// OQUE O SISTEMA VAI RESPONDER

if(idade < 18){
    console.log(nome + "Você não pode dirigir")
}else if(TemCarta = true && TemCarro == false){
    console.log(nome + "você pode dirigir, mas não tem carro")
}else{
    console.log(nome + "você é um motorista")
}