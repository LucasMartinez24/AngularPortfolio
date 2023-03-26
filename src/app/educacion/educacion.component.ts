import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicio/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacionList:any;
  constructor(private datos:PortfolioService){

  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.educacionList=data?.educacion;
    });
  }
}
