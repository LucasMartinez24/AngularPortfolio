import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicio/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  portfolioList:any;
  constructor(private datos:PortfolioService){

  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.portfolioList=data?.portfolio;
    });
  }
}
