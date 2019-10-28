import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  @Input() produit: {};

  @Output() clickTrigger = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  addToCartButtonClick() {
    this.clickTrigger.emit(this.produit)
  }
}
