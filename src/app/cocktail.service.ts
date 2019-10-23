import { Cocktails } from './models/cocktails';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails: Cocktails[]= [{
    name: "Mojito",
    price: 8,
    img: "https://static.750g.com/images/600-600/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg"
  },
{
  name: "Pinacolada",
  price: 7,
  img: "https://assets.afcdn.com/recipe/20180705/80258_w1024h768c1cx974cy1535cxt0cyt0cxb2471cyb3164.jpg"
},
{
  name: "Tequila sunrise",
  price: 9,
  img: "https://www.bakingbeauty.net/wp-content/uploads/2018/07/tequila-sunrise-4-300x300-1-500x500.jpg"
}]

  constructor() { }

  public getCocktails() {
    return this.cocktails
  }
}


