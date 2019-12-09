import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShirtSize } from '../models/shirtSize';
import { FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  shirtSizes: ShirtSize[];
  mobileView: boolean;
  constructor(private httpService: HttpService, private fb: FormBuilder) { 
    this.signUpForm = fb.group({
      name : '',
      email : '',
      shirtSize: ''
    });
  }

  ngOnInit() {
    this.httpService.getShirtSizes().subscribe(sizes => {
      this.shirtSizes = sizes;
    })
  }

  onSubmit(teamMember) {
    console.log(teamMember);
    //this.router.navigate(['/search']);
  }

  onResize(event){
    if (event.target.innerWidth < 1200) {
      this.mobileView = false;
    } else {
      this.mobileView = true;
    }
  }
}
