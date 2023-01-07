import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  form = {
    id: null,
    grado: null,
    correo_personal: '',
    correo_institucional: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    cedula: '',
    rol: null,
    estado: true,
  };

  editar: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //verificar si es edicion
    if (this.router.url.includes('edit')) {
      const id = this.router.url.split('/')[2];
      this.userService.get(id)
        .subscribe({
          next: (res: any) => {
            console.log(res);
            this.form.id = res.id;
            this.form.grado = res.grado;
            this.form.correo_personal = res.correo_personal;
            this.form.correo_institucional = res.correo_institucional;
            this.form.nombres = res.nombres;
            this.form.apellidos = res.apellidos;
            this.form.telefono = res.telefono;
            this.form.cedula = res.cedula;
            this.form.rol = res.rol;
            this.form.estado = res.estado;
            this.editar = true;
          },
          error: (e) => console.error(e)
        });
    }
  }

  onClickBack() {
    this.router.navigate(['/heroes-registrar']);
  }

  saveUser() {
    this.userService.create(this.form)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/users-listado']);
        },
        error: (e) => console.error(e)
      });

  }

  editUser() {
    this.userService.update(this.form.id, this.form)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/users-listado']);
        },
        error: (e) => console.error(e)
      });

  }
}
