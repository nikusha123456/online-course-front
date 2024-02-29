import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './pages/signup/auth.service';
import { importProvidersFrom } from '@angular/core';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AboutAreaComponent } from './components/about-area/about-area.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard, ProfileGuard } from './auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent,
    CoursesComponent,
    ForgotPasswordComponent,
    AboutAreaComponent,
    SubjectsComponent,
    NotFoundComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    AuthService,
    AuthGuard,
    ProfileGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
