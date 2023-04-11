const temIngresso = true;
const censura = 16;
const idade = 17;

// tem ingresso e se a pessoa tem idade maior igual a censura;
// um "&&" só dá verdadeiro se todas as expressões forem verdadeiras;

if (temIngresso === true && idade >= censura) {
    console.log("Pode entrar.");
} else {
    console.log("Barrada!");
}