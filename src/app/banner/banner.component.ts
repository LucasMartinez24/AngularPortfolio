import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicio/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  miPortfolio:any;
  constructor(private datos:PortfolioService){

  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      console.log(data.nombre);
      this.miPortfolio = data;
    });
  }

}
