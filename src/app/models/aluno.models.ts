import { TurmasService } from '../turmas.service';

export class Aluno{
    constructor(public nome:String, public codigo: String, public nota1: Number,
    public nota2: Number,public frequencia: Number,public turma: String){

    }
}