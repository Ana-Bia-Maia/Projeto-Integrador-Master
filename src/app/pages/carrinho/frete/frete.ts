import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './frete.html',
  styleUrl: './frete.css'
})
export class FreteComponent {
  @Input({ required: true }) cep!: string;
  @Input({ required: true }) frete!: number;
  @Output() cepChange = new EventEmitter<string>();
  @Output() freteChange = new EventEmitter<number>();

 
}
