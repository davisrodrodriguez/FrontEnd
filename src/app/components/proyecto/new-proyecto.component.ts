import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { v4 as uuidv4 } from 'uuid';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';




@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  id: number;
  nombreP: string = '';
  descripcionP: string = '';
  imagenP: string = '';
  
  linkP: string = '';
  isLogged = false;
  imagenUrl: string = '';

  


  constructor(private proyectoService: SProyectoService, 
              private router: Router,
              private activatedRoute:ActivatedRoute,
            
              private tokenService: TokenService) { }

 

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  
  }


  onCreate(): void {
    const id = uuidv4();
    if(this.imagenUrl != '') {
        this.imagenP = this.imagenUrl;
    }
    const proyecto = new Proyecto(this.id, this.nombreP, this.descripcionP, this.linkP, this.imagenP);
    this.proyectoService.save(proyecto).subscribe(
        data => {
            alert("Proyecto añadido");
            this.router.navigate(['']);
        }, err => {
            alert("Falló"+ JSON.stringify(err));
            console.error(err);
            this.router.navigate(['']);
        }
    )
}
uploadImageProyectos(event: any): void {
  this.imagenUrl = event.target.value;
}

}













