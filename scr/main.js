import ClasseUsuario from './function';

// 1.1

ClasseUsuario.info();

// 1.2

import {idade} from './function';

console.log(idade);

// 1.3

import Usuario, {idade as IdadeUsuario} from './function';
import { resolve } from 'path';

// Teste
const minhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve('OK') },2000);
});

async function executaPromise() {
    const response = await minhaPromise();

    console.log(response)
}

executaPromise();