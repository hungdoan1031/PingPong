import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamRostersComponent } from './team-rosters/team-rosters.component';


const routes: Routes = [
  { path: '', component: SignUpComponent, data: { animation: 'SignUpPage' } },
  { path: 'team-rosters', component: TeamRostersComponent, data: { animation: 'TeamRostersPage' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
