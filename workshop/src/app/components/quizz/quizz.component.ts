import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {
  questions:any;
  iterate:number = 0;
  correct:any;
  isShow:boolean = false;
  score:number = 0;
  userData = localStorage.getItem('caeliUserData');
  allResponse = new FormGroup({
    ans1: new FormControl(''),
    ans2: new FormControl(''),
    ans3: new FormControl(''),
    ans4: new FormControl(''),
    ans5: new FormControl(''),
    ans6: new FormControl(''),
    ans7: new FormControl(''),
    ans8: new FormControl(''),
    ans9: new FormControl(''),
    ans10: new FormControl('')
  });
  constructor(){
     this.questions=[
       {
         id:1,
         letter:'ans1',
         question:'Quelle est la meilleure période pour arroser ses plantes ?',
         option:[
           {optionid:1,name:"L'après midi"},
           {optionid:2,name:'Le soir'},
           {optionid:3,name:"Cela n'a pas d'importance"}
         ],
         answer:2,
         selected:0
       },
       {
         id:2,
         letter:'ans2',
         question:'Une douche de 5 minutes représente combien de litres d’eau dépensés ? ',
         option:[
           {optionid:1,name:'80 litres'},
           {optionid:2,name:'110 litres'},
           {optionid:3,name:'50 litres'}
         ],
         answer:1,
         selected:0
       },
       {
         id:3,
         letter:'ans3',
         question:'Laisser un robinet ouvert lors du brossage des dents entraîne la perte de :',
         option:[
           {optionid:1,name:'Entre 0 et 1 litre d’eau '},
           {optionid:2,name:'Entre 1 et 2 litre d’eau '},
           {optionid:3,name:'Entre 2 et 3 litre d’eau '}
         ],
         answer:2,
         selected:0
       },
       {
         id:4,
         letter:'ans4',
         question:'En réparant la fuite d’eau d’un robinet j’économise par jours :',
         option:[
           {optionid:1,name:'10 litres d’eau'},
           {optionid:2,name:'100 litres d’eau'},
           {optionid:3,name:'1000 litres d’eau'}
         ],
         answer:2,
         selected:0
       },
       {
         id:5,
         letter:'ans5',
         question:'La création d’une bouteille en plastique nécessite environ :',
         option:[
           {optionid:1,name:'3 litres d’eau et 30 cl de pétrole'},
           {optionid:2,name:'3 litres de pétrole et 30 cl d’eau '},
           {optionid:3,name:'Aucun des deux'}
         ],
         answer:1,
         selected:0
       },
       {
         id:6,
         letter:'ans6',
         question:'Si je répare une fuite d’eau de toilettes, par an je peux économiser jusqu’à :',
         option:[
           {optionid:1,name:'8 €'},
           {optionid:2,name:'80 €'},
           {optionid:3,name:'800 €'}
         ],
         answer:3,
         selected:0
       },
       {
         id:7,
         letter:'ans7',
         question:'Pour l’utilisation des appareils électroménagers il est préférable d’utiliser le mode :',
         option:[
           {optionid:1,name:'Rapide'},
           {optionid:2,name:'Éco'},
           {optionid:3,name:'Green'}
         ],
         answer:2,
         selected:0
       },
       {
         id:8,
         letter:'ans8',
         question:'Combien de litres d’eau je dépense en prenant un bain ?',
         option:[
           {optionid:1,name:'160 litres'},
           {optionid:2,name:'200 litres'},
           {optionid:3,name:'125 litres'}
         ],
         answer:1,
         selected:0
       },
       {
         id:9,
         letter:'ans9',
         question:'Quel est le temps idéal d’une douche sans trop consommer d’eau ?',
         option:[
           {optionid:1,name:'5 minutes'},
           {optionid:2,name:'7 minutes'},
           {optionid:3,name:'10 minutes'}
         ],
         answer:1,
         selected:0
       },
       {
         id:10,
         letter:'ans10',
         question:'Comment décririez-vous votre expérience avec Caeli ? :',
         option:[
           {optionid:1,name:'J’ai adoré, j’ai découvert de bons conseils !'},
           {optionid:2,name:'Je connaissais déjà toutes les astuces proposées...'},
           {optionid:3,name:'Je veux la même appli sur un nouveau sujet.'}
         ],
         answer:1,
         selected:0
       },
     ];
   }
    submit(){
      Object.entries(this.allResponse.value).forEach(
        ([key, value]) => {
          if(value == this.questions[this.iterate].answer){
            this.score += 1;
            this.iterate += 1;
          }
          else{
            this.iterate += 1;
          }
        }
      );
      this.score += 1;
      this.isShow = true;
      console.log('score' + this.score);
      console.log(this.userData);
    }
    ngOnInit(){}
  }
