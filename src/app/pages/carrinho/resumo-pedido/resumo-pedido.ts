import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-resumo-pedido',
  imports: [CurrencyPipe],
  templateUrl: './resumo-pedido.html',
  styleUrl: './resumo-pedido.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumoPedidoComponent {
  readonly quantidadeItens = input.required<number>();
  readonly total = input.required<number>();
}
