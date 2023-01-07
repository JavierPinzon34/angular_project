import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  constructor(private router: Router) {}
  onClickUser() {
    console.log('Click User');
    this.router.navigate(['/users-add']);
  }
}
