import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ItemCarrinho } from '../item-carrinho.model';

@Component({
  selector: 'li[app-item-carrinho]',
  imports: [CurrencyPipe],
  templateUrl: './item-carrinho.html',
  styleUrl: './item-carrinho.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCarrinhoComponent {
  readonly item = input.required<ItemCarrinho>();
  readonly quantidadeAlterada = output<number>();
  readonly remover = output<void>();
}
