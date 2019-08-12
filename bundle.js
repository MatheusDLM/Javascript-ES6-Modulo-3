"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Atv 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario("email@teste.com", "senha123");
var Adm1 = new Admin("email@teste.com", "senha123");
console.log('Atv1');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
// Atv 2
// 2.1

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idade = usuarios.map(function (age) {
  return age.idade;
});
console.log('Atv2');
console.log(idade); // 2.2

var filter = usuarios.filter(function (filtro) {
  return filtro.idade > 18;
});
console.log(filter); // 2.3

var find = usuarios.find(function (find) {
  return find.empresa === 'Google';
});
console.log(find); // 2.4

var maximo = usuarios.map(function (max) {
  max.idade = max.idade * 2;
  return max;
});
var filt = maximo.filter(function (filtrar) {
  return filtrar.idade < 50;
});
console.log(filt); // Atv 3

console.log('Atv3'); // 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log(arr); // 3.2

var usuario = {
  nome: "Diego",
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); // 3.3

var name = "Jorge";
var age = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Js";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(name, age));
console.log(mostraUsuario(name)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // Atv 4


console.log('Atv 4'); // 4.1

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); // 4.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); // Atv 5

console.log('Atv5');
var arr2 = [1, 2, 3, 4, 5, 6];
var x = arr2[0],
    y = arr2.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// function soma...

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
// 5.2

var usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, usuario1, {
  endereco: _objectSpread({}, usuario1.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario1, usuario2, usuario3); // Atv 6

var atv6usuario = 'Diego';
var atv6idade = 23;
console.log("O usu\xE1rio ".concat(atv6usuario, " possui ").concat(atv6idade, " anos")); // Atv 7

var nome7 = 'Diego';
var idade7 = 23;
var usuario7 = {
  nome7: nome7,
  idade7: idade7,
  cidade: 'Rio do Sul'
};
console.log(usuario7);
