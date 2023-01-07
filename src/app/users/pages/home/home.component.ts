import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  title = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      /* .subscribe({
        next: (data: any) => {
          this.users = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      }); */
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveUsers();
        },
        error => {
          console.log(error);
        });
      /* .subscribe({
        next: (res: any) => {
          console.log(res);
          this.refreshList();
        },
        error: (e: any) => console.error(e)
      }); */
  }

  searchTitle(): void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.userService.findByTitle(this.title)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      /* .subscribe({
        next: (data: any) => {
          this.users = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      }); */
  }

  onClickBack() {
    this.router.navigate(['/heroes-registrar']);
  }

  estado(estado: any) {
    if (estado == true) {
      return 'Activo';
    } else {
      return 'Inactivo';
    }
  }

  rol(rol: any) {
    if (rol == 1) {
      return 'Administrador';
    } else if (rol == 2) {
      return 'Analista';
    } else if (rol == 3) {
      return 'Estadistica';
    }
    return null;
  }

  grado(grado: any) {
    switch (grado) {
      case "1":
        return 'General';
      case "2":
        return 'Coronel';
      case "3":
        return 'Mayor';
      case "4":
        return 'Capitán';
      case "5":
        return 'Teniente';
      case "6":
        return 'Subteniente';
      case "7":
        return 'Sargento';
      case "8":
        return 'Cabo';
      case "9":
        return 'Soldado';

      default:
        break;
    }
    return null;

  }
}
