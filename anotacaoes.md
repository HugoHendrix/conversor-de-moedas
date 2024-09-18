
### Console log do Dev Tools
O `console.log()` é uma função do JavaScript que exibe mensagens no **Console** do navegador, usado para debugar e entender o comportamento de um código. O **Dev Tools** ou ferramentas de desenvolvimento, são ferramentas disponíveis nos navegadores que permitem inspecionar, editar e monitorar o código de uma página da web em tempo real. Usar `console.log()` é comum para verificar valores de variáveis e o fluxo do programa.

### Conceito de variáveis JS e suas atribuições
**Variáveis** são contêineres que armazenam dados. Elas podem ser criadas usando as palavras-chave `var`, `let` e `const`. O JavaScript permite armazenar diferentes tipos de dados em variáveis, como números, strings e booleanos.

#### Diferença entre `let`, `var` e `const`
- **`var`**: Era a forma mais comum de declarar variáveis até o ES6. No entanto, tem um escopo global ou de função, o que pode causar erros inesperados.
- **`let`**: Introduzido no ES6, `let` tem um escopo de bloco, o que significa que só existe dentro do bloco de código onde é declarado, tornando-o mais seguro.
- **`const`**: Também introduzido no ES6, funciona como `let` com escopo de bloco, mas uma vez atribuído um valor, ele não pode ser alterado.

#### Diferença entre os tipos de dados
- **String**: Cadeia de caracteres, ex: `"Hugo"`.
- **Number**: Representa valores numéricos, ex: `100`, `3.14`.
- **Boolean**: Representa verdadeiro ou falso, ex: `true` ou `false`.

#### Outros tipos de variáveis: Arrays e Objetos
- **Arrays**: São listas ordenadas de valores. São declarados usando colchetes `[]`. Um array pode armazenar qualquer tipo de dado, inclusive outros arrays ou objetos.
  
  ```js
  let frutas = ["maçã", "banana", "laranja"];
  ```
  
- **Objetos**: São coleções de pares `chave: valor`. Eles são criados usando chaves `{}` e permitem armazenar propriedades e métodos relacionados a uma entidade específica.
  
  ```js
  let carro = {marca: "Toyota", modelo: "Corolla", ano: 2020};
  ```

#### Como pegar um item do Array?
Você pode acessar itens em um array usando seu **índice**. Os índices começam em 0.

```js
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
```

### Concatenações
**Concatenação** é o ato de unir strings. No JavaScript, podemos usar o operador `+` para concatenar strings.

```js
let nome = "Hugo";
let sobrenome = "Hendrix";
let nomeCompleto = nome + " " + sobrenome; // "Hugo Hendrix"
```

### Objetos em JS: Características e Propriedades
Objetos são coleções de propriedades. Cada propriedade é um par `chave: valor`. As **propriedades** descrevem características de um objeto.

#### Como acessar objetos e ver suas propriedades?
Usa-se a notação de ponto ou colchetes para acessar as propriedades de um objeto.

```js
let pessoa = {nome: "Hugo", idade: 69};
console.log(pessoa.nome); // "Hugo"
console.log(pessoa["idade"]); // 69
```

### Funções no JS
Uma **função** é um bloco de código reutilizável que realiza uma tarefa específica. As funções podem receber **parâmetros** (inputs) e retornar valores.

```js
function saudacao(nome) {
    return "Olá, " + nome;
}
console.log(saudacao("Hugo")); // "Olá, Hugo"
```

#### O que é arrow function?
Introduzida no ES6, a **arrow function** é uma sintaxe mais concisa para escrever funções. Ela não altera o valor de `this` no contexto em que é definida.

```js
let saudacao = (nome) => "Olá, " + nome;
```

#### Diferença entre named function e arrow function
- **Named function**: Tem um nome próprio e é chamada pelo nome.
- **Arrow function**: Mais curta, não tem seu próprio `this`, usa o contexto em que foi criada.

### Estruturas condicionais `if/else`
As **estruturas condicionais** permitem executar diferentes blocos de código dependendo de condições específicas. A condição entre parênteses deve ser verdadeira (`true`) para que o bloco de código seja executado.

```js
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}
```

### Atribuições
- **`=`**: Atribui um valor.
- **`==`**: Compara valores, sem verificar o tipo.
- **`===`**: Compara valores e tipos estritos.
- **`!=`**: Verifica se os valores são diferentes.
- **`>`**, **`<`**, **`>=`**, **`<=`**: Comparadores de maior, menor e igual.

### Estruturas de repetição: Loops
Os **loops** repetem um bloco de código várias vezes. O **for** é um dos tipos mais usados.

```js
let frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

### Event handling - Gerenciador de eventos
**Eventos** são ações que ocorrem em uma página da web, como um clique ou pressionar uma tecla. Com **event listeners**, você pode capturar e responder a esses eventos.

#### `document.querySelector()`
Esse método seleciona um elemento do DOM baseado em um seletor CSS.

```js
let botao = document.querySelector("#botao");
```

#### `addEventListener()`
Esse método adiciona um ouvinte de eventos a um elemento HTML, permitindo que o código responda a eventos específicos, como cliques.

```js
botao.addEventListener("click", () => {
    alert("Botão clicado");
});
```

### Agradecimentos

 Agradeço a B7WEB e ao professor Bonieky Lacerda por disponibilizarem materiais e ensinamentos práticos que tornam o aprendizado de JavaScript acessível e eficiente!