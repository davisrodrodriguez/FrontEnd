export class Educacion {
    id: number;
    nombreE: string;
    descripcionE: string;
    imagenD: string;

    constructor(nombreE: string, descripcionE: string, imagenD: string) {
        
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagenD = imagenD;
    }
}
