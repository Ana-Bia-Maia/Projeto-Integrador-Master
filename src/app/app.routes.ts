import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro';
import { CarrinhoComponent } from './pages/carrinho/carrinho';
import { HomeComponent } from './pages/home/home';
import { ManutencaoProdutosComponent } from './pages/painelAdmin/manutencao-produtos/manutencao-produtos';
import { LoginComponent } from './pages/login/login';
import { ClientesComponent } from './pages/painelAdmin/clientes/clientes';
import { Produtos } from './pages/produtos/produtos';
import { EditarProduto } from './pages/produtos/editar-produto/editar-produto';
import { ModalExcluirProdutoComponent } from './pages/produtos/modal-excluir-produto/modal-excluir-produto';
import { ConsultaProdutos } from './pages/produtos/consulta-produtos/consulta-produtos';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'carrinho', component: CarrinhoComponent },
	{ path: 'manutencao-produtos', component: ManutencaoProdutosComponent },
	{ path: 'clientes', component: ClientesComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'produtos', component: Produtos },
	{ path: 'editar-produto', component: EditarProduto }, 
	
	// CORRIGIDO: Rota cadastrada para interceptar o clique na imagem e abrir a consulta!
	{ path: 'produtos/consulta', component: ConsultaProdutos }, 

	{ path: '**', redirectTo: '' }
];
