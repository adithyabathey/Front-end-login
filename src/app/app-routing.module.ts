import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { RockpaperscissorComponent } from './rockpaperscissor/rockpaperscissor.component';
import { AuthGuard } from './service/authguard.service';
import { StockComponent } from './stock/stock.component';
import { WhackMoleComponent } from './whack-mole/whack-mole.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'homepage',canActivate: [AuthGuard],
    component:HomepageComponent
  },
  {
    path:'homepage/rock-paper-scissor',canActivate: [AuthGuard],
    component:RockpaperscissorComponent
  },
  {
    path:'homepage/quiz',canActivate: [AuthGuard],
    component:QuizComponent
  },
  {
    path:'homepage/stock',canActivate: [AuthGuard],
    component:StockComponent
  },
  {
    path:'homepage/whack-mole',canActivate: [AuthGuard],
    component:WhackMoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
