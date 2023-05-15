import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

    id: number;
    nombre: string = '';
    imagenUrl: string = '';
    porcentaje: number;
    imagenC: string = '';
    isLogged = false;
    



  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const id = uuidv4();
    if(this.imagenUrl != '') {
        this.imagenC = this.imagenUrl;
    }
    const skill = new Skill(this.id, this.nombre, this.porcentaje, this.imagenC);
    this.skillS.save(skill).subscribe(
        data => {
            alert("Skill creada correctamente");
            this.router.navigate(['']);
          }, err =>{
            alert("Fallo al añadir la skill");
            this.router.navigate(['']);
          }
    )
}
uploadImageProyectos(event: any): void {
  this.imagenUrl = event.target.value;
}

}















