export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    linkP: string;
    imagenP: string; 

    
    constructor(id: number, nombreP: string,  descripcionP: string, linkP: string, imagenP: string){

        this.id = id;
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.linkP= linkP;
        this.imagenP= imagenP; 

    }
}
