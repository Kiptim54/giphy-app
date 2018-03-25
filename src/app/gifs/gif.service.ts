import { Injectable } from '@angular/core';
import { Gif } from '../gif';

@Injectable()
export class GifService {

  getGifs(){
    return Gif;
  }
  constructor() { }

}
