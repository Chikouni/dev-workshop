import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  constructor(private router: Router) {}
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  score = 0;
  level = 0;
  toggle = new FormControl();

  getErrorMessage2() {
    return this.name.hasError('required') ? 'Vous devez rentrer un prénom' :'';
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'Vous devez rentrer un e-mail' :
        this.email.hasError('email') ? 'E-mail non valide' :
            '';
  }
  ngOnInit() {
    if (localStorage.getItem("caeliUserData") !== null){
      this.router.navigate(['/defis']);
    }
  }
  onSubmit(){
    if(this.toggle.value == true && this.name.valid && this.email.valid){
      var caeliUserData = {
        name: this.name.value,
        email: this.email.value,
        score: this.score.toString(),
        level: this.level.toString()
      }
      localStorage.setItem('caeliUserData', JSON.stringify(caeliUserData));
      this.router.navigate(['/defis']);
    }
  }

}
