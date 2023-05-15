import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto:Proyecto= null;
  isLogged = false;
  imagenUrl: string = '';

  constructor(private proyectoService: SProyectoService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    private tokenService: TokenService) { }



ngOnInit(): void {

const id = this.activatedRouter.snapshot.params['id'];

if (this.tokenService.getToken()) {
this.isLogged = true;
} else {
this.isLogged = false;
}

this.proyectoService.detail(id).subscribe(
data => {
this.proyecto = data;
}, err => {
alert("Error al modificar proyecto");
this.router.navigate(['']);
}
)

}

onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  if(this.imagenUrl != '') {
      this.proyecto.imagenP = this.imagenUrl;
  }
  this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
          this.imagenUrl = '';
          this.router.navigate(['']);
      }, err => {
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
      }
  )
}

uploadImageProyectos(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.imagenUrl = reader.result as string;
          this.proyecto.imagenP = reader.result as string;
      };
  }
}



}




