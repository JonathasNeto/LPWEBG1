import { Component, OnInit } from '@angular/core';
import { Aluno } from './models/aluno.models';
import { TurmasService } from './turmas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'provaG1';
  turmas = [];
  turma: any = null;
  aluno: any = null;
  frequencia: number;
  nota1: number;
  nota2: number;
  registros = [];

  constructor(private service: TurmasService) { }

  ngOnInit(): void {
    this.service.lista()
      .subscribe(
        (dados: any) => this.turmas = dados
      );
    this.redefinir();
  }

  listaAlunos() {
    return this.turma != null ? this.encontraTurma(this.turma).alunos : [];
  }

  salvar() {
    this.registros.push(
      { 
        "nome": this.encontrarAluno(this.aluno,this.turma), 
        "codigo": this.aluno, 
        "nota1": this.nota1, 
        "nota2": this.nota2, 
        "frequencia": this.frequencia, 
        "turma": this.turma,
        "media": this.calcularMedia(this.nota1, this.nota2)
      });
     
  }
  redefinir(){
    this.aluno = new Aluno(null,null,null,null,null,null);
}

  

calcularMedia(n1:number, n2:number){
  return (n1+(n2*2))/3;
}

  encontraTurma(turmaProcurada) {
    var turm;
    for (var i in this.turmas) {
      if (this.turmas[i].numero == turmaProcurada) {
        turm = this.turmas[i];
      }
    } 
    return turm;
  }
  
  encontrarAluno(codAluno, codTurma) {
    var turm = this.encontraTurma(codTurma).alunos;
    for (var i in turm) {
      if (turm[i].codigo == codAluno) {
        return turm[i].nome;
      }
    } 
    return null;   

  }

  calcularFrequenciaMedia() {
    let media = 0;
    for (var i in this.registros) {
      media += this.registros[i].frequencia;
    } return media / this.registros.length;
  }

  calcularNota1Media() {
    let media = 0;
    for (var i in this.registros) {
      media += this.registros[i].nota1;
    } return media / this.registros.length;
  }

  calcularNota2Media() {
    let media = 0;
    for (var i in this.registros) {
      media += this.registros[i].nota2;
    } return media / this.registros.length;
  }


}