import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardimageService {

  constructor() { }

  getImages(){
    return Images.slice(0);
  }

  getImage(id:string){
    return Images.slice(0).find(img=>img.id = id);
  }
  
}

const Images = [
  {"id":"AC", "name":"ace", "type":"club", "path":"assets/img/AllCards/AC.png"},
  {"id":"AD", "name":"ace", "type":"diamond", "path":"assets/img/AllCards/AD.png"},
  {"id":"AH", "name":"ace", "type":"heart", "path":"assets/img/AllCards/AH.png"},
  {"id":"AS", "name":"ace", "type":"spade", "path":"assets/img/AllCards/AS.png"},

  {"id":"2C", "name":"two", "type":"club", "path":"assets/img/AllCards/2C.png"},
  {"id":"2D", "name":"two", "type":"diamond", "path":"assets/img/AllCards/2D.png"},
  {"id":"2H", "name":"two", "type":"heart", "path":"assets/img/AllCards/2H.png"},
  {"id":"2S", "name":"two", "type":"spade", "path":"assets/img/AllCards/2S.png"},

  {"id":"3C", "name":"three", "type":"club", "path":"assets/img/AllCards/3C.png"},
  {"id":"3D", "name":"three", "type":"diamond", "path":"assets/img/AllCards/3D.png"},
  {"id":"3H", "name":"three", "type":"heart", "path":"assets/img/AllCards/3H.png"},
  {"id":"3S", "name":"three", "type":"spade", "path":"assets/img/AllCards/3S.png"},

  {"id":"4C", "name":"four", "type":"club", "path":"assets/img/AllCards/4C.png"},
  {"id":"4D", "name":"four", "type":"diamond", "path":"assets/img/AllCards/4D.png"},
  {"id":"4H", "name":"four", "type":"heart", "path":"assets/img/AllCards/4H.png"},
  {"id":"4S", "name":"four", "type":"spade", "path":"assets/img/AllCards/4S.png"},

  {"id":"5C", "name":"five", "type":"club", "path":"assets/img/AllCards/5C.png"},
  {"id":"5D", "name":"five", "type":"diamond", "path":"assets/img/AllCards/5D.png"},
  {"id":"5H", "name":"five", "type":"heart", "path":"assets/img/AllCards/5H.png"},
  {"id":"5S", "name":"five", "type":"spade", "path":"assets/img/AllCards/5S.png"},

  {"id":"6C", "name":"six", "type":"club", "path":"assets/img/AllCards/6C.png"},
  {"id":"6D", "name":"six", "type":"diamond", "path":"assets/img/AllCards/6D.png"},
  {"id":"6H", "name":"six", "type":"heart", "path":"assets/img/AllCards/6H.png"},
  {"id":"6S", "name":"six", "type":"spade", "path":"assets/img/AllCards/6S.png"},

  {"id":"7C", "name":"seven", "type":"club", "path":"assets/img/AllCards/7C.png"},
  {"id":"7D", "name":"seven", "type":"diamond", "path":"assets/img/AllCards/7D.png"},
  {"id":"7H", "name":"seven", "type":"heart", "path":"assets/img/AllCards/7H.png"},
  {"id":"7S", "name":"seven", "type":"spade", "path":"assets/img/AllCards/7S.png"},

  {"id":"8C", "name":"eight", "type":"club", "path":"assets/img/AllCards/8C.png"},
  {"id":"8D", "name":"eight", "type":"diamond", "path":"assets/img/AllCards/8D.png"},
  {"id":"8H", "name":"eight", "type":"heart", "path":"assets/img/AllCards/8H.png"},
  {"id":"8S", "name":"eight", "type":"spade", "path":"assets/img/AllCards/8S.png"},

  {"id":"9C", "name":"nine", "type":"club", "path":"assets/img/AllCards/9C.png"},
  {"id":"9D", "name":"nine", "type":"diamond", "path":"assets/img/AllCards/9D.png"},
  {"id":"9H", "name":"nine", "type":"heart", "path":"assets/img/AllCards/9H.png"},
  {"id":"9S", "name":"nine", "type":"spade", "path":"assets/img/AllCards/9S.png"},

  {"id":"10C", "name":"ten", "type":"club", "path":"assets/img/AllCards/10C.png"},
  {"id":"10D", "name":"ten", "type":"diamond", "path":"assets/img/AllCards/10D.png"},
  {"id":"10H", "name":"ten", "type":"heart", "path":"assets/img/AllCards/10H.png"},
  {"id":"10S", "name":"ten", "type":"spade", "path":"assets/img/AllCards/10S.png"},

  {"id":"JC", "name":"jack", "type":"club", "path":"assets/img/AllCards/JC.png"},
  {"id":"JD", "name":"jack", "type":"diamond", "path":"assets/img/AllCards/JD.png"},
  {"id":"JH", "name":"jack", "type":"heart", "path":"assets/img/AllCards/JH.png"},
  {"id":"JS", "name":"jack", "type":"spade", "path":"assets/img/AllCards/JS.png"},

  {"id":"QC", "name":"queen", "type":"club", "path":"assets/img/AllCards/QC.png"},
  {"id":"QD", "name":"queen", "type":"diamond", "path":"assets/img/AllCards/QD.png"},
  {"id":"QH", "name":"queen", "type":"heart", "path":"assets/img/AllCards/QH.png"},
  {"id":"QS", "name":"queen", "type":"spade", "path":"assets/img/AllCards/QS.png"},

  {"id":"KC", "name":"king", "type":"club", "path":"assets/img/AllCards/KC.png"},
  {"id":"KD", "name":"king", "type":"diamond", "path":"assets/img/AllCards/KD.png"},
  {"id":"KH", "name":"king", "type":"heart", "path":"assets/img/AllCards/KH.png"},
  {"id":"KS", "name":"king", "type":"spade", "path":"assets/img/AllCards/KS.png"}
  
]