import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RockpaperscissorComponent } from './rockpaperscissor/rockpaperscissor.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './service/authguard.service';
import { StockComponent } from './stock/stock.component';
import { WhackMoleComponent } from './whack-mole/whack-mole.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    RockpaperscissorComponent,
    QuizComponent,
    StockComponent,
    WhackMoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
