import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab : Experiencia = null;
  isLogged = false;
  imagenUrl: string = '';

  constructor(
    private sExperiencia: SExperienciaService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.detail(id).subscribe(
        data =>{
          this.expLab = data;
        }, err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.update(id, this.expLab).subscribe(
        data => {
          this.imagenUrl = '';
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar experiencia");
           this.router.navigate(['']);
        }
      )
    }
    uploadImageExperiencia(event: Event): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
              this.imagenUrl = reader.result as string;
              this.expLab.imagenE = reader.result as string;
          };
      }
    }
  }