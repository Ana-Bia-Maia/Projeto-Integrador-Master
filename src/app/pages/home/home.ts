import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer';
import { MenuComponent } from '../../shared/menu/menu';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, MenuComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  produtos = [
    { nome: 'Sofá 3 Lugares Retrátil e Reclinável Linho Cinza', selo: '10% OFF', precoAnterior: 'R$ 6.599,00', preco: 'R$ 5.900,00', imagem: '/assets/images/sofa2lugares.jpeg' },
    { nome: 'Sofá Retrátil Aramis - 2,90m Tecido Bouclé Café', selo: '6% OFF', precoAnterior: 'R$ 5.899,00', preco: 'R$ 5.400,00', imagem: '/assets/images/sofa2lugares.jpeg' },
    { nome: 'Sofá Retrátil e Reclinável 4 Lugares Mola Ensacada', selo: '12% OFF', precoAnterior: 'R$ 6.199,00', preco: 'R$ 5.499,00', imagem: '/assets/images/sofa4lugares.jpeg' },
    { nome: 'Cama de Casal Madeira Maciça Freijó Padrão Queen', selo: 'MADEIRA NOBRE', seloEscuro: true, precoAnterior: 'R$ 4.699,00', preco: 'R$ 4.483,00', imagem: '/assets/images/camaNogueira.jpg' },
    { nome: 'Cama Box Casal 138 Molas Ensacadas + Pillow Top', selo: '25% OFF', precoAnterior: 'R$ 2.000,00', preco: 'R$ 1.500,00', imagem: '/assets/images/camaBox.jpeg' },
    { nome: 'Mesa de Jantar 6 Lugares Madeira Maciça Imbuia', selo: '8% OFF', precoAnterior: 'R$ 3.290,00', preco: 'R$ 2.999,00', imagem: '/assets/images/mesa-jantar.png' },
    { nome: 'Poltrona Decorativa Bouclé Pés Palito', selo: '15% OFF', precoAnterior: 'R$ 1.190,00', preco: 'R$ 999,00', imagem: '/assets/images/poltrona.jpg' },
    { nome: 'Rack para TV até 65 Polegadas Freijó', selo: 'LANÇAMENTO', seloEscuro: true, precoAnterior: 'R$ 2.390,00', preco: 'R$ 2.190,00', imagem: '/assets/images/mesa.jpg' },
    { nome: 'Escrivaninha Home Office 140cm Nogueira', selo: '10% OFF', precoAnterior: 'R$ 1.590,00', preco: 'R$ 1.429,00', imagem: '/assets/images/mesa.jpg' },
    { nome: 'Guarda-Roupa Casal 6 Portas Madeira Clara', selo: '18% OFF', precoAnterior: 'R$ 3.990,00', preco: 'R$ 3.269,00', imagem: '/assets/images/camaNogueira.jpg' }
  ];

  ambientes = [
    { nome: 'Salas & Sofás', detalhe: 'Mais de 140 modelos', imagem: '/assets/images/sofa2lugares.jpeg' },
    { nome: 'Quartos & Camas', detalhe: 'Camas box e maciças', imagem: '/assets/images/camaNogueira.jpg' },
    { nome: 'Cozinha & Jantar', detalhe: 'Mesas, cadeiras e aparadores', imagem: '/assets/images/mesa-jantar.png' },
    { nome: 'Escritório', detalhe: 'Mesas e estantes de trabalho', imagem: '/assets/images/mesa.jpg' }
  ];
}
