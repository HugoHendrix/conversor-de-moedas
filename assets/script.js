//Tipos de variáveis
let idade = 34              // Tipo Number
let nome = "Hugo Hendrix"   // Tipo String
let logado = true           // Tipo Boolean

// Arrays devem ser abertos utilizando os cochetes, eles aceitam vários tipos de dados e começam com index no zero, 0, 1, 2 e 3
//Caso seja inserido um número que não tem no array, o console log vai mostrar undefined, ou seja, não foi definida.
let ingredientes = ["farinha", "água", "sal", "corante"]

//Mostra a quantidade de itens dentro do Array e o seu conteúdo
console.log(ingredientes)

//Para exibir um item do Array, vai exibir farinha. Para arrays são necessários os colchetes []
console.log(ingredientes[0])

//Objetos, por exemplo, em um jogo, um personagem tem caracteristicas/propriedades. Para Objetos usamos as chaves {} e não se usa caracteres especiais, por exemplo força. Use forca
let personagem = {
    nome: "Guerreiro",
    nivel: 10,
    forca: 800,
    magia: 200,
    vida: 1000,
    mana: 200
}
// A combinação de arrays e objetos são muito pooderosas, por exemplo, podemos ter um array e aos inveis de farinha, ter um objeto, que por sua vez tem suas propriedades.
// Como acessar o objeto e ver as propriedades.
console.log(personagem.forca) // no caso o nome do objeto + um ponto e o nome da propriedade

//Funções no JS
//Funções são blocos de códigos que ficam parados e executados somente quando necessário (chamado)
// Por exemplo, podemos fazer uma função que soma números, número A e número B. Os números são INPUTS, a função processa a soma e o OUTPUT é o resultado da função.

function somar(numeroA, numeroB){
    resultado = numeroA + numeroB;
    return resultado
}
let resultadoSomar  = somar(15, 15)
console.log(resultadoSomar)

// Nesse caso  podemos usar a função quantas vezes forem necessárias, bastando apenas chamar ela, somar(). Não sendo necessário escrever uma nova função.
let resultadoSomar2 = somar(30, 30)
console.log(resultadoSomar2)