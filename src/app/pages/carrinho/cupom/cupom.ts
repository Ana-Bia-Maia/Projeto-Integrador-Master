import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupom',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cupom.html',
  styleUrl: './cupom.css'
})
export class CupomComponent {
  @Input({ required: true }) codigoCupom!: string;
  @Input({ required: true }) mensagemCupom!: string;
  @Input({ required: true }) cupomValido!: boolean;
  @Output() codigoCupomChange = new EventEmitter<string>();
  @Output() aplicar = new EventEmitter<void>();
  @Output() remover = new EventEmitter<void>();
}
