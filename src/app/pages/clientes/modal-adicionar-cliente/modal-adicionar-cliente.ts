import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DadosCliente, StatusCliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-modal-adicionar-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-adicionar-cliente.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAdicionarClienteComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly fechar = output<void>();
  readonly salvar = output<DadosCliente>();
  readonly formulario = this.formBuilder.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    status: ['Ativo' as StatusCliente, Validators.required],
  });

  salvarCliente(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.salvar.emit(this.formulario.getRawValue());
  }
}
