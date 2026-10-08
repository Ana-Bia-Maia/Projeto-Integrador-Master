import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCarrinho } from '../item-carrinho.model';

@Component({
  selector: 'li[app-item-carrinho]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-carrinho.html',
  styleUrl: './item-carrinho.css'
})
export class ItemCarrinhoComponent {
  @Input({ required: true }) item!: ItemCarrinho;
  @Output() quantidadeAlterada = new EventEmitter<number>();
  @Output() remover = new EventEmitter<void>();

  get etiquetaMadeira(): string {
    if (this.item.nome.includes('Tauari')) return 'Tauari';
    if (this.item.nome.includes('Freijó')) return 'Freijó';
    return 'Nogueira';
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
