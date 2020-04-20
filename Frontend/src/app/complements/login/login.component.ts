import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(e){
    //e.preventdefault;
    const cible = e.target;
    const login = cible.querySelector("#login").value;
    const mdp = cible.querySelector('#mdp').value;
    console.log(login);
    console.log(mdp);
    if(login === mdp){
      window.location.href="user";
    }
    return false;
  }
}
