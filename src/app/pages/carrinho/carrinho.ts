
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer';
import { MenuComponent } from '../../shared/menu/menu';
import { ItemCarrinhoComponent } from './item-carrinho/item-carrinho';
import { ItemCarrinho } from './item-carrinho.model';
import { ResumoPedidoComponent } from './resumo-pedido/resumo-pedido';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [MenuComponent, FooterComponent, ItemCarrinhoComponent, ResumoPedidoComponent],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class CarrinhoComponent {
  itens: ItemCarrinho[] = [
    {
      id: 1,
      nome: 'Poltrona Lina em Couro Caramelo & Madeira Nogueira',
      sku: 'ARC-LNA-8802',
      categoria: 'Poltronas',
      preco: 3890,
      estoque: 12,
      status: 'Ativo',
      quantidade: 1,
      imagem: '/assets/images/poltrona.jpg'
    },
    {
      id: 2,
      nome: 'Mesa de Jantar Orgânica Tauari 2.40m',
      sku: 'ARC-MTA-2400',
      categoria: 'Mesas de jantar',
      preco: 6450,
      estoque: 8,
      status: 'Ativo',
      quantidade: 1,
      imagem: '/assets/images/mesa-jantar.png'
    },
    {
      id: 3,
      nome: 'Cadeira Espaldar Alto Freijó (Conjunto com 2 un)',
      sku: 'ARC-FRJ-02CX',
      categoria: 'Cadeiras',
      preco: 2500,
      estoque: 20,
      status: 'Ativo',
      quantidade: 2,
      imagem: '/assets/images/cadeira-freijo.webp'
    }
  ];

  get total(): number {
    return this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  get quantidadeTotal(): number {
    return this.itens.reduce((total, item) => total + item.quantidade, 0);
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

}
