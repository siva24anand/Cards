import { Component, OnInit } from '@angular/core';
import { CardimageService } from "../../Service/cardimage.service";
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),

    trigger('Highlight',[
      state('initial', style({
        //margin:'0'
        height:'100px'
      })),
      state('final',style({
        //margin:'0 0 10px 0'
        height:'120px'
      })),
      transition('initial=>final', animate('50ms')),
      transition('final=>initial', animate('50ms'))
    ]),

    trigger('BackgroundChange',[
      state('initial', style({
        border:'none'
      })),
      state('final', style({
        border:'.5px solid grey'
      }))
    ])
  ]
})
export class MainComponent implements OnInit {

  cards:any[] = [];
  allimages:any[]=[];
  firstsevenimages:any[] =[];
  secondSevenImages:any[]=[];
currentState:string='initial';
openCard:any[] = [];

firstSelectedCards:any[]=[];

    constructor(private imageService: CardimageService) { 
      this.allimages = this.imageService.getImages();
      // this.firstsevenimages = this.LoadCards(7);
      // this.secondSevenImages = this.LoadCards(7);
    }

    //Events:

    btnLoad(){
      //this.firstsevenimages = this.LoadCards(7);
      this.cards = [];
      this.currentState = 'initial';
      this.openCard = [];

      this.openCard.push(this.getRandomCard());
      this.cards.push(this.getRandomCard());
      this.cards.push(this.getRandomCard());
      this.cards.push(this.getRandomCard());
      this.cards.push(this.getRandomCard());
      this.cards.push(this.getRandomCard());
      this.cards.push(this.getRandomCard());
      this.cards.push(this.getRandomCard());
    }
   

    CardEvent(){
      this.currentState = this.currentState == 'initial'?'final':'initial';
      this.firstSelectedCards.push()
      
    }

    btnFirstDrop(){

    }
    


    //helper methods
    LoadCards(length:number){
      this.cards=[];
      for(let i =0; i< length; i++){
        this.cards.push(this.getRandomCard());
      }
      return this.cards;
    }

    getRandomCard(){
      return this.allimages[Math.floor(Math.random()*this.allimages.length)];
    }

    ngOnInit() {
    }
}
