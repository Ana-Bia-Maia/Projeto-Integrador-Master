import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Produto } from '../../../models/produto.model';

@Component({
  selector: 'app-modal-excluir-produto',
  templateUrl: './modal-excluir-produto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalExcluirProdutoComponent {
  readonly produto = input.required<Produto>();
  readonly fechar = output<void>();
  readonly confirmar = output<void>();
}
