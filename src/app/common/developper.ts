import { Skill } from "./skill";
export class Developper {
  public lastName: string;
  public firstName: string;
  public age: number;
  public sexe: string;
  public bio: string;
  public skills: Skill[];

  constructor(input?: Developper) {
      Object.assign(this, input);

  }
}
