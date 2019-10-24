import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  nome : string;
  cpf : string;
  email : string;
  telefone : string="";
  trilha : string;
  descricao: string;
  v_parcial : number;
  

  cliente = [];

  formCadastro = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    cpf: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    telefone: new FormControl('',[Validators.required]),
    trilha: new FormControl('',[Validators.required]),
    descricao: new FormControl('',[Validators.required])
  });

  mascara_cpf(cpf){
    if(this.cpf.length == 3){
       this.cpf = this.cpf + '.';	   
    }
    if(this.cpf.length == 7){
      this.cpf = this.cpf + '.';
    }
    if(this.cpf.length == 11){
      this.cpf = this.cpf + '-';
    }
  }
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

ngOnInit() {
 
  }
  onSubmit() {
    this.cliente.push({'nome':this.nome,'cpf':this.cpf,'email':this.email,'telefone':this.telefone,'trilha':this.trilha});
        
        if(this.trilha == "1"){
          this.v_parcial = 20;
        }
        else if(this.trilha == "2"){
          this.v_parcial = 25;
        }
        else if(this.trilha == "3"){
          this.v_parcial= 30
        }

        if(this.v_parcial == 20){
          
          confirm("seu Codigo: 2859447 Obrigado!");
        }

        else if(this.v_parcial == 25){
          confirm("seu Codigo: 3233447 Obrigado");
        }
        
        else if(this.v_parcial == 30){
          confirm("seu Codigo: 54646454 Obrigado!");
        }


        


      
        this.router.navigate(['/']);      

    
    
  }


selcod(){
  
  if(this.trilha=="1"){
    this.descricao="Trilha reservada com sucesso: Sua trilha custará 20 reais, compareça as 8:15h no dia 25/08/2019 com valor solicitado e o código que aparecerá após a confirmação da reserva.";
  }
  else if(this.trilha=="2"){
    this.descricao="Trilha reservada com sucesso: Sua trilha custará 25 reais, compareça as 9hs no dia 30/08/2019 com valor solicitado e o código que aparecerá após a confirmação da reserva.";
  }
  else if(this.trilha=="3"){
    this.descricao="Trilha reservada com sucesso: Sua trilha custará 30 reais, compareça as 8:50h no dia 15/09/2019 com valor solicitado e o código que aparecerá após a confirmação da reserva.";
  }
}

}