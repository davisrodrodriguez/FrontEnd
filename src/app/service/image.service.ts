import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { log } from 'console';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:  string = "";

  constructor(private storage: Storage) { }
   
  public uploadImage($event:any, name: string){
    const file = $event.target.files[0]
     console.log(file);
    const  imgRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imgRef, file)
    .then(response =>{
      this.getImages()

    })
    .catch(error => console.log(error))
  }

  

  public getImages() {

    const imagesRef = ref(this.storage,'imagen')
    list(imagesRef)
    .then(async Response =>{
      for(let item of  Response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es:  " + this.url)
      }
    })
    .catch(error => console.log(error))
  }

 



}


