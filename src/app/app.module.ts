import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// skills
import { SkillsScriptService } from './skills-script.service';
//skills fin
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { EducacionComponent } from './educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BannerComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
