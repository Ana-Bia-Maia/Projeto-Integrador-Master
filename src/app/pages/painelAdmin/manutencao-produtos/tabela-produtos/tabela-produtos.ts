import { Component, Input } from '@angular/core';
import { Produto } from '../../../../models/produto.model';

@Component({
  selector: 'app-tabela-produtos',
  standalone: true,
  templateUrl: './tabela-produtos.html',
  styleUrl: './tabela-produtos.css'
})
export class TabelaProdutosComponent {
  @Input({ required: true }) produtos: Produto[] = [];
}
