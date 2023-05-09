import { Component, OnInit } from '@angular/core';
import { Persona } from '../clase/persona';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  persona: Persona = new Persona;
  constructor(private datos:PersonaService){

  }
  ngOnInit(): void {
    this.datos.get().subscribe(

      e=>this.persona=e
    );
  }

}
