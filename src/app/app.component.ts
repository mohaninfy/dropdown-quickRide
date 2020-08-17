import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skills';     
  skills: any[] = [];
  totalSkills: any[] = ['Agile',
  'Scrum',
  'Financial Modelling',
  'Ideation Leadership',
  'Feature Definition',
  'Forecasting',
  'Profit and Loss',
  'Scope Management',
  'Project Lifecycle Management',
  'Meeting','Facilitation','Angular','JavaScript', 'HTML', 'CSS', 'JQuery','.Net']
  defaultArr = ['Angular','JavaScript', 'HTML', 'CSS', 'JQuery','.Net'];
  
  userSkill = '';
  constructor(){
    for(let i of this.defaultArr){
      this.updateHero(i);
    }
  }  
  ngOnInit(){

  }
  addHero(name: string) {
    this.userSkill = name.trim();       
  }
  updateHero(name: any){
    name = name.trim();
    if (!name) { return; }
    let hero = name;
    // Pipe updates display because skills array is a new object
    this.skills = this.skills.concat(hero); 
  }
  selectSkill(event){
  }
}
