import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente, DadosCliente, StatusCliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-modal-editar-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-editar-cliente.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEditarClienteComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);

  readonly cliente = input.required<Cliente>();
  readonly fechar = output<void>();
  readonly salvar = output<DadosCliente>();
  readonly formulario = this.formBuilder.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    status: ['Ativo' as StatusCliente, Validators.required],
  });

  ngOnInit(): void {
    const { nome, email, telefone, status } = this.cliente();
    this.formulario.setValue({ nome, email, telefone, status });
  }

  salvarAlteracoes(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.salvar.emit(this.formulario.getRawValue());
  }
}
