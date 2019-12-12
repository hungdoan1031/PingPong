import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../http.service';
import { ShirtSize } from '../models/shirtSize';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from '../log.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  shirtSizes: ShirtSize[];
  error: string;
  constructor(    
    private httpService: HttpService, 
    private fb: FormBuilder,
    private router: Router, 
    private logging: LogService) { 
      
    this.signUpForm = fb.group({
      name : null,
      email : null,
      shirtSizeId: null
    });
  }

  ngOnInit() {
    this.logging.info("test 11111");

    this.httpService.getShirtSizes().subscribe(sizes => {
      this.shirtSizes = sizes;
    });
  }

  onSubmit(teamMember) {    
    teamMember.id = this.newGuid();
    this.httpService.createTeamMember(teamMember).subscribe(
      newMember => {
        this.router.navigate(['sign-up-result'], { queryParams: { teamid: newMember.teamId }});
        this.error = null;
        this.logging.info("Add new member " + newMember.name + " to team " + newMember.id);
      },
      error => {
        this.error = error;
        this.logging.error(error);
      }
    );   
  }

  // Create a Guid for member id
  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }  
}