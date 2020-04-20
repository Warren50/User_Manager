import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest} from '@angular/common/http';
import { Utilisateur} from '../Utilisateur';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  server : string = 'http://localhost:8000';
  headers :HttpHeaders = new HttpHeaders();
  options :any;
  constructor(private http: HttpClient) {

    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-requested-With','XMLHttpRequest');

    //this.options = new HttpRequest({headers:this.headers});

   }

   addUser(nom,email,statut,mdp):Observable<Utilisateur>{

      const nouveau = new Utilisateur(nom,email,statut,mdp);
      return this.http.post<Utilisateur>(this.server+'add', nouveau);
   }
}
