import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
/*
const cliente1 = new Cliente("André", 12345678969);
// const cliente2 = new Cliente("Alice", 32165498758);
// console.log(cliente2.cpf);

const contaCorrenteAndre = new ContaCorrente(cliente1, 1001);
contaCorrenteAndre.depositar(500);
contaCorrenteAndre.sacar(50);
//const conta2 = new ContaCorrente(102, cliente2);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(0, cliente1, 1002);

contaSalario.depositar(500);
contaSalario.sacar(100);

//const conta = new Conta(100, cliente1, 1010);

// conta2.cliente = new Cliente(); --> Pode ser feito assim mas não é recomendado, pois acessa dados de classes diferentes!
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 32165498758;

//contaCorrenteAndre.transferir(valor, conta2);

console.log(contaSalario);
//console.log(ContaCorrente.numeroDeContas);
//console.log(contaPoupanca);
*/

//Seção funcionários ====================================================================================================================

const diretor = new Diretor("Ricardo", 10000, 32165498785);
diretor.cadastrarSenha("123");
const gerente = new Gerente("Rodrigo", 5000, 45678932120);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Lais", 47865114865, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
