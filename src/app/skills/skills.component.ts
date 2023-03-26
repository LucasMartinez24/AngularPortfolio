import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicio/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillList:any;
  constructor(private datos:PortfolioService){

  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.skillList=data.skills;
    });
  }
}
