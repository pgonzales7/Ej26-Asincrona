import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private service: UserserviceService,
    private autenticacion: AutenticacionService,
    private router: Router
  ) { }

  error = false

  user = {
    username: "",
    email: ""
  }

  login() {
    if (this.user.username === "" && this.user.email === "") {
      return
    } else {
      this.service.getUsersAll().subscribe(usuarios => {
        const usuario = usuarios.find(usu => {
          return usu.username === this.user.username && usu.email === this.user.email
        })
        if (usuario) {
          this.autenticacion.login();
          this.router.navigate(["/vista"]);
          return
        } else {
          this.error = true
          return
        }
      })
    }
  }
}
