// idêntico "===" significa que além de ter o mesmo conteúdo, tem o mesmo tipo;

const ehIdentico = 18 === 18; //number, number
console.log(ehIdentico);

const eHidentico = 18 === "18"; //number, string
console.log(eHidentico);

const ehiDentico = "18" === "18"; //string, string
console.log(ehiDentico);

// não idêntico "!==";
const ehidEntico = "18" !== "18";
console.log(ehidEntico);
