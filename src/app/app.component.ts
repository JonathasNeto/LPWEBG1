import { Component, OnInit } from '@angular/core';
import { TurmasService } from './turmas.service';
import { Aluno } from './models/aluno.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  turmas = [];
  turma = null;
  aluno: Aluno;
  frequencia: Number;
  nota1: Number;
  nota2: Number;
  registros = [];
     
  constructor(private service: TurmasService){ }
    
  ngOnInit(): void {
    this.service.lista()
    .subscribe((dados: any) => this.turmas = dados); 
  }

  listaAlunos(parametro){
    var alunos = [];

    for(var aluno in this.turma.indexof(parametro)){
      alunos.push(aluno);
    
    }return alunos;
  }

  salvar(){
    this.registros.push(this.aluno);
  }
  
  encontraTurma(parametro){
    var turm;
    for (var i in this.turmas){
      if (this.turmas[i] === parametro){
        turm = this.turmas[i];
      }
    }return turm;
  }
  encontrarAluno(codigo){
    for(var i in this.turmas){
      for(var e in this.turma[i].alunos){
        if (this.turmas[i].alunos[e].codigo == codigo){
          return this.turmas[i].alunos[e];
        }
      }
    }

  }
  calcularMedia(parametro){
    let media;
    for (var i in this.registros){
      if(this.registros[i].codigo == parametro.codigo){
        media = (this.registros[i].nota1 + this.registros[i].nota2)/2;
      }
    }return media;

  }

}

