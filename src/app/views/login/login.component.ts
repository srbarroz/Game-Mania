import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  receberDados() {
    console.log(this.userModel)

    // Enivar dados para API
    this.loginService.login(this.userModel).subscribe( (response) => {
      // console.log("response: ", response)
      console.log("O Status Code é:", response.status)
      console.log("O Token de permissão é:", response.body.accessToken)

      this.mensagem = "Bem-vindo, " + response.body.user.nome
      console.log(this.mensagem)
    }, (responseErro) => {
      console.log("responseErro", responseErro)
      // this.mensagem = "Foi encontrado algum problema. Tente novamente."
      this.mensagem = responseErro.error
      
    })
  }

}
