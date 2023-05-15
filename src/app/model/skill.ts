export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    imagenC: string; 
    

    constructor(id: number, nombre: string, porcentaje: number, imagenC: string ) {
        this.id = id;
        this.nombre = nombre;
        this.imagenC = imagenC;
        this.porcentaje = porcentaje;
        
    }
}
