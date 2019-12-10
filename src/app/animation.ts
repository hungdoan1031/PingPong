import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('SignUpPage <=> TeamRostersPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transition: 'all',
          'transform-origin': 'right',
          'transform-style': 'preserve-3d',          
        })
      ]),
      query(':enter', [
        style({ 
            transform: 'rotateY(90deg)',  
            'background-color': "white",
            'box-shadow': '-50px -10px 50px black'      
        })
      ]),
      query(':leave', [
        style({ 
          'z-index': '-1',    
        })
      ]),
      group([
        query(':enter', [
          animate('1s ease-in-out', 
            style({ 
                transform: 'perspective(2000px) rotateY(0deg)',
                'box-shadow': '-5px -1px 5px black'
            }))
        ])
      ]),
    ]),
    transition('SignUpResultPage <=> TeamRostersPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transition: 'all',
          'transform-origin': 'right',
          'transform-style': 'preserve-3d',          
        })
      ]),
      query(':enter', [
        style({ 
            transform: 'rotateY(90deg)',  
            'background-color': "white",
            'box-shadow': '-50px -10px 50px black'      
        })
      ]),
      query(':leave', [
        style({ 
          'z-index': '-1',    
        })
      ]),
      group([
        query(':enter', [
          animate('1s ease-in-out', 
            style({               
                transform: 'perspective(2000px) rotateY(0deg)',
                'box-shadow': '-5px -1px 5px black'
            }))
        ])
      ]),
    ]),
    transition('SignUpPage <=> SignUpResultPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transition: 'all',
          'transform-origin': 'right',
          'transform-style': 'preserve-3d',          
        })
      ]),
      query(':enter', [
        style({ 
            transform: 'rotateY(90deg)',  
            'background-color': "white",
            'box-shadow': '-50px -10px 50px black'      
        })
      ]),
      query(':leave', [
        style({ 
          'z-index': '-1',    
        })
      ]),
      group([
        query(':enter', [
          animate('1s ease-in-out', 
            style({ 
                transform: 'perspective(2000px) rotateY(0deg)',
                'box-shadow': '-5px -1px 5px black'
            }))
        ])
      ]),
    ]),
  ]);