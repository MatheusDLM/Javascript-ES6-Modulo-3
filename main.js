// Atv 1
class Usuario {
 constructor(email,senha){
     this.email = email;
     this.senha = senha;
 }

     isAdmin() {
         return this.admin === true;
 }
}

class Admin extends Usuario {
    constructor(email,senha) {
        super(email,senha);
        this.admin = true;
    }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log('Atv1');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

// Atv 2
// 2.1
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const idade = usuarios.map(function(age){
       return age.idade;
   })
   console.log('Atv2');
   console.log(idade);

// 2.2

const filter = usuarios.filter(function(filtro){
    return filtro.idade > 18;
})

console.log(filter);

// 2.3

const find = usuarios.find(function(find){
    return find.empresa === 'Google';
})

console.log(find);

// 2.4

const maximo = usuarios.map(function(max){
    max.idade = max.idade * 2;
    return max
})

const filt =  maximo.filter(function(filtrar){
    return filtrar.idade < 50;
})

console.log(filt);

// Atv 3

console.log('Atv3');

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

console.log(arr);

// 3.2
const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

// 3.3
const name = "Jorge";
const age = 23;

const mostraUsuario = (nome = "Js", idade = 18) => ({
  nome,
  idade
});

console.log(mostraUsuario(name, age));
console.log(mostraUsuario(name));

// 3.4

const promise = () => new Promise((resolve, reject) => resolve());

// Atv 4

console.log('Atv 4')

// 4.1

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

const {nome, endereco: {cidade,estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2

function mostraInfo({nome,idade}) {
    return `${nome} tem ${idade} anos.`;
   }

   console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// Atv 5

console.log('Atv5')

const arr2 = [1, 2, 3, 4, 5, 6]

const [x,...y] = arr2;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
   function soma(...params) {
       return params.reduce((total,next) => total + next);
   }

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


// 5.2
const usuario1 = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};

const usuario2 = {...usuario1, nome: 'Gabriel'}
const usuario3 = {...usuario1, endereco: {...usuario1.endereco, cidade: 'Lontras',}}
console.log(usuario1,usuario2,usuario3);

// Atv 6

const atv6usuario = 'Diego';
const atv6idade = 23;

console.log(`O usuário ${atv6usuario} possui ${atv6idade} anos`);

// Atv 7

const nome7 = 'Diego';
const idade7 = 23;
const usuario7 = {
 nome7,
 idade7,
 cidade: 'Rio do Sul',
};

console.log(usuario7);

   