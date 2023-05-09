import { Educacion } from "./educacion";
import { Experiencia } from "./experiencia";
import { Skills } from "./skills";

export class Persona {
  id:number=0;
  nombre:string="";
  apellido:string="";
  titulo:string="";
  email:string="";
  password:string="";
  experiencias:Experiencia[]=[];
  educacion:Educacion[]=[];
  skills:Skills[]=[]
}
