
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { DevelopperComponent } from './developper/developper.component';
import { SkillComponent } from './skill/skill.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    CocktailListComponent,
    DevelopperComponent,
    SkillComponent,
    BoutiqueComponent,
    ArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
