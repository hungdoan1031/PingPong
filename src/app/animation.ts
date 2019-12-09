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
          //transition: 'all 1s linear',
          'transform-origin': 'right',
          'transform-style': 'preserve-3d',          
        })
      ]),
      query(':enter', [
        style({ 
            //left: '-100%'
            transform: 'rotateY(180deg)',        
        })
      ]),
      //query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-in-out', 
            style({ 
                //transform: 'perspective(1000px) rotateY(-180deg)',
                'z-index': '-1',
            }))
        ]),
        query(':enter', [
          animate('500ms ease-in-out', 
            style({ 
                //left: '0%'
                transform: 'perspective(1000px) rotateY(0deg)',
            }))
        ])
      ]),
      //query(':enter', animateChild()),
    ]),
  ]);