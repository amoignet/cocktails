import { CocktailService } from './../cocktail.service';
import { Cocktails } from './../models/cocktails';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],

})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktails[];

  constructor(private CocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktails = this.CocktailService.getCocktails();
  }

}

