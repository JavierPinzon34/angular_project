import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  form = {
    grado: '',
  };

  constructor(private router: Router) {}

  onClickBack() {
    this.router.navigate(['/heroes-registrar']);
  }
}
