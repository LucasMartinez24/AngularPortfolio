import { Component } from '@angular/core';
import { SkillsScriptService} from './../skills-script.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(private skillsService: SkillsScriptService){
    skillsService.skills(["main"])
  }
  numero:number = 50;
}
