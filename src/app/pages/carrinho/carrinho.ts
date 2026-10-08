
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer';
import { MenuComponent } from '../../shared/menu/menu';
import { CupomComponent } from './cupom/cupom';
import { FreteComponent } from './frete/frete';
import { ItemCarrinhoComponent } from './item-carrinho/item-carrinho';
import { ItemCarrinho } from './item-carrinho.model';
import { ResumoPedidoComponent } from './resumo-pedido/resumo-pedido';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, MenuComponent, FooterComponent, ItemCarrinhoComponent, ResumoPedidoComponent, FreteComponent, CupomComponent],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class CarrinhoComponent {
  readonly cuponsDisponiveis: Partial<Record<string, number>> = {
    DESIGN10: 10,
    ARQUITETO15: 15,
    PRIMEIRACOMPRA: 5
  };

  itens: ItemCarrinho[] = [
    {
      id: 1,
      nome: 'Poltrona Lina em Couro Caramelo & Madeira Nogueira',
      especificacao: 'Madeira: Nogueira Maciça | Revestimento: Couro Legítimo Caramelo',
      referencia: 'ARC-LNA-8802',
      preco: 3890,
      quantidade: 1,
      madeira: '#8b5a2b',
      imagem: '/assets/images/poltrona.jpg'
    },
    {
      id: 2,
      nome: 'Mesa de Jantar Orgânica Tauari 2.40m',
      especificacao: 'Madeira: Tauari Natural | Pés: Aço Carbono Preto Fosco',
      referencia: 'ARC-MTA-2400',
      preco: 6450,
      quantidade: 1,
      madeira: '#c89b6a',
      imagem: '/assets/images/mesa-jantar.png'
    },
    {
      id: 3,
      nome: 'Cadeira Espaldar Alto Freijó (Conjunto com 2 un)',
      especificacao: 'Madeira: Freijó Maciço | Assento: Linho Cru',
      referencia: 'ARC-FRJ-02CX',
      preco: 2500,
      quantidade: 2,
      madeira: '#b08968',
      imagem: '/assets/images/cadeira-freijo.webp'
    }
  ];

  frete = 0;
  codigoCupom = 'DESIGN10';
  cupomAplicado = 'DESIGN10';
  percentualCupom = 10;
  mensagemCupom = 'Cupom DESIGN10 aplicado com sucesso: 10% de benefício concedido.';
  cupomValido = true;
  cep = '04538-133';

  get subtotal(): number {
    return this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  get desconto(): number {
    return this.subtotal * this.percentualCupom / 100;
  }

  get total(): number {
    return this.subtotal + this.frete - this.desconto;
  }

  get totalPix(): number {
    return this.total * 0.95;
  }

  alterarQuantidade(item: ItemCarrinho, passo: number): void {
    const quantidade = item.quantidade + passo;
    if (quantidade >= 1 && quantidade <= 99) {
      item.quantidade = quantidade;
    }
  }

  removerItem(item: ItemCarrinho): void {
    if (window.confirm(`Remover "${item.nome}" do carrinho?`)) {
      this.itens = this.itens.filter((produto) => produto.id !== item.id);
    }
  }

  esvaziarCarrinho(): void {
    if (window.confirm('Deseja remover todas as peças do carrinho?')) {
      this.itens = [];
    }
  }

  aplicarCupom(): void {
    const codigo = this.codigoCupom.trim().toUpperCase();
    const percentual = this.cuponsDisponiveis[codigo];

    if (!codigo) {
      this.mensagemCupom = 'Digite um código de cupom para continuar.';
      this.cupomValido = false;
      return;
    }

    if (!percentual) {
      this.cupomAplicado = '';
      this.percentualCupom = 0;
      this.mensagemCupom = `Cupom ${codigo} inválido ou expirado.`;
      this.cupomValido = false;
      return;
    }

    this.codigoCupom = codigo;
    this.cupomAplicado = codigo;
    this.percentualCupom = percentual;
    this.mensagemCupom = `Cupom ${codigo} aplicado com sucesso: ${percentual}% de benefício concedido.`;
    this.cupomValido = true;
  }

  removerCupom(): void {
    this.codigoCupom = '';
    this.cupomAplicado = '';
    this.percentualCupom = 0;
    this.mensagemCupom = 'Nenhum cupom aplicado no momento.';
    this.cupomValido = false;
  }

}
