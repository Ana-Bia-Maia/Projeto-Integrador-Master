/*import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DadosProduto, Produto, StatusProduto } from '../../../models/produto.model';

@Component({
  selector: 'app-modal-formulario-produto',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-formulario-produto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFormularioProdutoComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);

  readonly produto = input<Produto | null>(null);
  readonly fechar = output<void>();
  readonly salvar = output<DadosProduto>();
  readonly formulario = this.formBuilder.nonNullable.group({
    nome: '',
    sku: '',
    categoria: '',
    preco: 0,
    estoque: 0,
    status: 'Ativo' as StatusProduto,
    imagem: '',
  });

  ngOnInit(): void {
    const produto = this.produto();
    if (produto) this.formulario.setValue({
      nome: produto.nome,
      sku: produto.sku,
      categoria: produto.categoria,
      preco: produto.preco,
      estoque: produto.estoque,
      status: produto.status,
      imagem: produto.imagem,
    });
  }

  salvarProduto(): void {
    this.salvar.emit(this.formulario.getRawValue());
  }
}*/
