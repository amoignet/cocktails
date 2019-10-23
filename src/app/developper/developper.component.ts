import { Skill } from './../common/skill';
import { Developper } from './../common/developper';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.scss']
})
export class DevelopperComponent implements OnInit {

public skill: Skill
public developper: Developper

moi: Developper = {
  lastName: "Moignet",
  firstName: "Antoine",
  age: 34,
  sexe: "Masculin",
  bio: "Je suis apprenti développeur",
  skills: [{name:"Angular",
            logo:"logoAngular",
            site:"http//blablabla"}]

}


  constructor() { }

  ngOnInit() {
    this.developper = new Developper(this.moi);
    }

}
