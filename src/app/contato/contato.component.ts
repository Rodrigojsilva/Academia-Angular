import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private router: Router) { }

  nome : string;
  email : string;
  telefone: string="";
  mensagem: string;

  cliente = [];

  mascara_telefone(telefone){
    if(this.telefone.length == 0){
      this.telefone = '(' + this.telefone;	   
    }
    if(this.telefone.length == 3){
      this.telefone = this.telefone + ')';
    }
    if(this.telefone.length == 9){
      this.telefone = this.telefone + '-';
    }
  }


  formContato = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    telefone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    mensagem: new FormControl('',[Validators.required])
   
  });


  ngOnInit() {
  }


  onSubmit(){
   if(this.cliente.push({'nome':this.nome,'email':this.email,'telefone':this.telefone,'mensagem':this.mensagem})){
     alert("Mensagem Enviada com Sucesso!");
   }

   this.router.navigate(['/']);

  }

}
