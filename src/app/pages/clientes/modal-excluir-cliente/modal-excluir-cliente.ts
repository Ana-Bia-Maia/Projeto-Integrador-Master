import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-modal-excluir-cliente',
  templateUrl: './modal-excluir-cliente.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalExcluirClienteComponent {
  readonly cliente = input.required<Cliente>();
  readonly fechar = output<void>();
  readonly confirmar = output<void>();
}
