import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {
  questions:any;
  currentIndex:number;
  notAttempted:any;
  correct:any;
  currentQuestionSet:any;
  start=false;
  gameover=false;
  buttonname="Play";
  constructor(){
     this.questions=[
       {
         id:1,
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

     this.currentIndex=0;
     this.currentQuestionSet= this.questions[this.currentIndex];
   }

    next(){
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestionSet= this.questions[this.currentIndex];
    }
    submit(){
      this.buttonname="Replay";
      if(this.currentIndex+1==this.questions.length){
         this.gameover=true;
         this.start=false;
           this.correct=0;
      this.notAttempted=0;
      this.questions.map(x=>{
          if(x.selected!=0){
            if(x.selected == x.answer)
              this.correct=this.correct + 1;
          }
          else{
            this.notAttempted=this.notAttempted + 1;
          }
          x.selected=0;
      });
      }


    }
    startQuiz(){
      this.gameover=false;
      this.currentIndex=0;
     this.currentQuestionSet= this.questions[this.currentIndex];
        this.start=true;
    }
  }
