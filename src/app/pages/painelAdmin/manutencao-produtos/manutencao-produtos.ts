import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer/footer';
import { MenuComponent } from '../../../shared/menu/menu';
import { SidebarComponent } from '../../../shared/sidebar/sidebar';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos';
import { Produto } from '../../../models/produto.model';

@Component({
  selector: 'app-manutencao-produtos',
  standalone: true,
  imports: [MenuComponent, SidebarComponent, FooterComponent, TabelaProdutosComponent],
  templateUrl: './manutencao-produtos.html',
  styleUrl: './manutencao-produtos.css'
})
export class ManutencaoProdutosComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Sofá 2 Lugares Retrátil Reclinável Aramis', sku: 'SOF-290', categoria: 'Sofás & Poltronas', preco: 5900, estoque: 12, status: 'Ativo', imagem: '/assets/images/sofa2lugares.jpeg' },
    { id: 2, nome: 'Cama de Casal Minimalista Nogueira', sku: 'CAM-148', categoria: 'Quartos & Camas', preco: 4400, estoque: 2, status: 'Ativo', imagem: '/assets/images/camaNogueira.jpg' },
    { id: 3, nome: 'Cama Box Casal 138 Molas Ensacadas', sku: 'BOX-ENS-138', categoria: 'Quartos & Camas', preco: 1500, estoque: 28, status: 'Ativo', imagem: '/assets/images/camaBox.jpeg' },
    { id: 4, nome: 'Sofá Retrátil 4 Lugares', sku: 'SOF-CAC-348', categoria: 'Sofás & Poltronas', preco: 5450, estoque: 1, status: 'Ativo', imagem: '/assets/images/sofa4lugares.jpeg' },
    { id: 5, nome: 'Mesa Redonda de Jantar Freijó Centenário', sku: 'MES-FRJ-160', categoria: 'Jantar & Cadeiras', preco: 7820, estoque: 0, status: 'Inativo', imagem: '/assets/images/mesa.jpg' }
  ];

}
