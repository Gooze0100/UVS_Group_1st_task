import { Injectable } from '@angular/core';

export interface Apples {
  // jei oboulys svera 100g
  result: number;
  countTime: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApplesService {
  constructor() {}
}
// kadangi cia yra imone kuri uzsiima tarkime kasu sistemomis tai cia tikrai tures skaiciuoti obuolius pvz
