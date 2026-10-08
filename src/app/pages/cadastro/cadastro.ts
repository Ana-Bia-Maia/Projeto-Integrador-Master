import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer';
import { MenuComponent } from '../../shared/menu/menu';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent, FooterComponent],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class CadastroComponent {


  private readonly clienteService = inject(ClienteService);

  tipo: 'PF' | 'PJ' = 'PF';


  nome = '';
  email = '';
  documento = '';
  celular = '';
  nascimento = '';


  cep = '';
  rua = '';
  numero = '';
  complemento = '';
  bairro = '';
  cidade = '';


  senha = '';
  confirmarSenha = '';
  mostrarSenha = false;
  mostrarConfirmar = false;


  aceitouTermos = false;
  querOfertas = true;


  mensagemErro = '';


  temMinimo() {
    return this.senha.length >= 8;
  }

  temMaiuscula() {
    return /[A-Z]/.test(this.senha);
  }

  temNumeroOuSimbolo() {
    return /[0-9!@#$%&*]/.test(this.senha);
  }

  buscarCep() {
    let cepLimpo = this.cep.replace('-', '');

    if (cepLimpo.length != 8) {
      alert('Digite os 8 números do CEP.');
      return;
    }

    fetch('https://viacep.com.br/ws/' + cepLimpo + '/json/')
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados.erro) {
          alert('CEP não encontrado.');
        } else {
          this.rua = dados.logradouro;
          this.bairro = dados.bairro;
          this.cidade = dados.localidade;
        }
      });
  }


  finalizar() {
    this.mensagemErro = '';

    if (this.nome == '' || this.email == '' || this.documento == '' || this.celular == '') {
      this.mensagemErro = 'Preencha todos os dados pessoais.';
      return;
    }

    if (this.cep == '' || this.rua == '' || this.numero == '' || this.bairro == '' || this.cidade == '') {
      this.mensagemErro = 'Preencha o endereço de entrega.';
      return;
    }

    if (!this.temMinimo() || !this.temMaiuscula() || !this.temNumeroOuSimbolo()) {
      this.mensagemErro = 'A senha não cumpre os requisitos de segurança.';
      return;
    }

    if (this.senha != this.confirmarSenha) {
      this.mensagemErro = 'As senhas não são iguais.';
      return;
    }

    if (!this.aceitouTermos) {
      this.mensagemErro = 'Você precisa aceitar os Termos de Uso.';
      return;
    }
    const novoCliente: Cliente = {
      id: Date.now(),
      nome: this.nome,
      email: this.email,
      telefone: this.celular,
      cadastro: new Date().toLocaleDateString('pt-BR'),
      status: 'Ativo',
      tipo: this.tipo,
      documento: this.documento,
      nascimento: this.nascimento,
      endereco: {
        cep: this.cep,
        rua: this.rua,
        numero: this.numero,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
      },
    };

    this.clienteService.adicionar(novoCliente);

    alert('Cadastro realizado com sucesso!');
  }
}
