import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../http.service';
import { ShirtSize } from '../models/shirtSize';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { TeamMember } from '../models/teamMember';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [],
})

export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  shirtSizes: ShirtSize[];
  mobileView: boolean;
  constructor(private httpService: HttpService, private fb: FormBuilder,private router: Router) { 
    this.signUpForm = fb.group({
      name : null,
      email : null,
      shirtSizeId: null
    });
  }

  ngOnInit() {
    this.httpService.getShirtSizes().subscribe(sizes => {
      this.shirtSizes = sizes;
    })
  }

  onSubmit(teamMember) {    
    teamMember.id = this.newGuid();
    this.httpService.createTeamMember(teamMember).subscribe(newMember => {
      this.router.navigate(['sign-up-result'], { queryParams: { teamid: newMember.teamId }});
    });   
  }

  onResize(event){
    if (event.target.innerWidth < 1200) {
      this.mobileView = false;
    } else {
      this.mobileView = true;
    }
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }  
}