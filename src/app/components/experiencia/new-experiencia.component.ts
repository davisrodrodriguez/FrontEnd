import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  id: number;
  nombreE: string = '';
  descripcionE: string = '';
  imagenE: string = '';
  isLogged = false;
  imagenUrl: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const id = uuidv4();
   
    const expe = new Experiencia(this.id, this.nombreE, this.descripcionE, this.imagenE);
    this.sExperiencia.save(expe).subscribe({next:
      data =>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, error:  err => {
        alert("Falló");
        this.router.navigate(['']);
      }}
    )
  }

  uploadImageProyectos(event: any): void {
    this.imagenUrl = event.target.value;
  }
  
} 

