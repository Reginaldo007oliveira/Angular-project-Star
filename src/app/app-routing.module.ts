//A virgula do componete home faz a diferença, se tirar quebra o link da navegação
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { SignupComponent } from './signup/signup.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  { path: 'home',
   component:  HomeComponent,
   },

   {
    path: 'favorito',
    component: FavoritoComponent,
},

{
  path: 'signup',
  component: SignupComponent,
},
{
  path: 'clientes',
  component: ClientesComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
