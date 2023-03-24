import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsScriptService {

  constructor() { }

  skills(skills:string[]){
    for(let skill of skills){
      let script = document.createElement('script');
      script.src = "./assets/js/"+ skill + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}
