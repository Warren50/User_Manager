export class Utilisateur{
    nom: string;
    email: string;
    statut: string;
    mdp: string;

    constructor(nom,email,statut,mdp){

        this.nom = nom;
        this.email = email;
        this.statut = statut;
        this.mdp = mdp;
    }
}