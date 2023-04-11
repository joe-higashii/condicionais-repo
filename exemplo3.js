const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = false;

// tem ingress E;
// tem idade maior ou igual a censura OU está dos pais;
// quando a variável é booleando, pode omitir true/false da linha de comando;

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar.")
    } else {
        console.log("Barrada!")
    }
} else {
    console.log("Barrada!")
}