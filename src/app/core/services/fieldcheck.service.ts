import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldcheckService {

  constructor() { }

  fieldCheck(): any {
    return new Promise(resolve => setTimeout(function(){
      const firstElementWithError = document.querySelector('.invalid-feedback');

      if(firstElementWithError){
        const yOffset = -250;
        const y = firstElementWithError.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

        resolve(false);
      }
      else{
        resolve(true);
      }
    }, 250));
  }
}
