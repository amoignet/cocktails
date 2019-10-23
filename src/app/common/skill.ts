export class Skill {
 public name: string;
 public logo: string;
 public site: string;

 constructor(input?: Skill) {
  Object.assign(this, input);

}
}
