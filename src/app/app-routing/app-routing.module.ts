import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';
import { SomosComponent } from './../somos/somos.component';
import { TrilhaComponent } from './../trilha/trilha.component';
import { ContatoComponent } from './../contato/contato.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'somos', component: SomosComponent },
  { path: 'trilha', component: TrilhaComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
