import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { PosicaoComponent} from './posicao/posicao.component';
import { EstadoComponent } from './estado/estado.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'posicao',
    component: PosicaoComponent
  },
  {
    path:'estado',
    component: EstadoComponent
  },
  {
    path:'historico',
    component: HistoricoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
