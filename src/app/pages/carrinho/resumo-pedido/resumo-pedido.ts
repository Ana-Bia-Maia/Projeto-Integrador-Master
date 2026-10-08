import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumo-pedido',
  standalone: true,
  templateUrl: './resumo-pedido.html',
  styleUrl: './resumo-pedido.css'
})
export class ResumoPedidoComponent {
  @Input({ required: true }) quantidadeItens!: number;
  @Input({ required: true }) subtotal!: number;
  @Input({ required: true }) frete!: number;
  @Input({ required: true }) desconto!: number;
  @Input({ required: true }) cupomAplicado!: string;
  @Input({ required: true }) percentualCupom!: number;
  @Input({ required: true }) total!: number;
  @Input({ required: true }) totalPix!: number;

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
