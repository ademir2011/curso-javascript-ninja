/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function(){

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

var person = {
    name : 'Ademir',
    lastname : 'Bezerra',
    age : 23
};

console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( Object.keys(person) );

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

books.push({
    name: 'livro1',
    pages: 12312
});

books.push({
    name: 'livro2',
    pages: 162
});

books.push({
    name: 'livro3',
    pages: 175
});

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
for(var arrei in books){
    console.log( books[arrei] );
}

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
books.pop();

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
for(var arrei in books){
    console.log( books[arrei] );
}

/*
Converta os objetos que ficaram em `books` para strings.
*/
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
for(var arrei in books){
    console.log ( JSON.stringify( books[arrei] ) );
}

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var index in books){
    for( var prop in books[index]){
        console.log( prop+": "+books[index][prop]);
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['a','d','e','m','i','r'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse());

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());

})();