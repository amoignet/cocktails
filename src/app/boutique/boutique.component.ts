import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-boutique",
  templateUrl: "./boutique.component.html",
  styleUrls: ["./boutique.component.scss"]
})
export class BoutiqueComponent implements OnInit {
  nom: string;
  prix: number;
  
  panier = [];

  articleList = [
    {
      nom: "Noix de coco",
      prix: 2
    },
    {
      nom: "Citron vert",
      prix: 1
    }
  ];

  constructor() {}

  ngOnInit() {}

  ajouteUnPdtAuPanier($event) {
    this.panier.push($event);
  }
}
