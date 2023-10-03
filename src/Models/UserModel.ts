//user model

import { Id, Model, Role } from "@ibaraki-douji/api";

@Model()
export class User {

    @Id()
    id: number;
    nom: string;
    prenom: string;
    points: number;
    role: string;
    cdate: Date;
    email: string;
    password: string;
    phone: number;
}