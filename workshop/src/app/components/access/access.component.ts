import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
      return this.email.hasError('required') ? 'Vous devez rentrer un e-mail' :
          this.email.hasError('email') ? 'E-mail non valide' :
              '';
    }

}
