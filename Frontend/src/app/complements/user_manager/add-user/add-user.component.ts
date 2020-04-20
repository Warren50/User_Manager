import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../service/user.service';
//import { ExecFileSyncOptionsWithStringEncoding } from 'child_process';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  nom: string;
  email: string;
  statut: string;
  mdp: string;
  constructor(private us:UserService) { }

  ngOnInit(): void {
  }

  ajouter(e){
    //e.preventdefault();
    //console.log(this.nom);
    this.us.addUser(this.nom,this.email,this.statut,this.mdp);
    console.log("Utilisateur ajouter");
    return false;
  }

}
