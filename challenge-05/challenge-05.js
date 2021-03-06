/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = [1,2,'312',null,132];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myF( arr ){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myF(myvar)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myF2(arg1, arg2){
    return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuarrei = [12,null,'teste',true,{}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myF2(meuarrei, 0);
myF2(meuarrei, 1);
myF2(meuarrei, 2);
myF2(meuarrei, 3);
myF2(meuarrei, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( nomeLivro ){
    var obj = {
        livro1: {
            quantidadePaginas: 13,
            autor: 'joao',
            editora: 'novarock'
        },
        livro2: {
            quantidadePaginas: 41,
            autor: 'josefa',
            editora: 'newstar'
        },
        livro3: {
            quantidadePaginas: 414,
            autor: 'brandao',
            editora: 'fullback'
        }
    }

   

    return obj.nomeLivro;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
