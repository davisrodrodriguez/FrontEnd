import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';




@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyectoService: SProyectoService, 
    private tokenService: TokenService, public imageServiceLogoP: ImageService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    );
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar Proyecto");
        }
      );

    }
    }

}
