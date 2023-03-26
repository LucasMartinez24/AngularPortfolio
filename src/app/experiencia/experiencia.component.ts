import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicio/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList:any;
  constructor(private datos:PortfolioService){

  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.experienciaList=data?.experiencia;
    });
  }
}
