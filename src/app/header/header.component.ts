import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private router: Router) { }
    somacpf1:number=0;
    somacpf2:number=0;
    resto1:number=0;
    resto2:number=0;
    digito1:number=0;
    digito2:number=0;
    cpf:string;

    formLogin = new FormGroup({
      cpf: new FormControl('',[Validators.required]),
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
  
  consulta(){
    //Obetendo o Primeiro Digito Verficador
    this.somacpf1 = (parseInt(this.cpf.slice(0,1))*10)+
                    (parseInt(this.cpf.slice(1,2))*9)+
                    (parseInt(this.cpf.slice(2,3))*8)+
                    (parseInt(this.cpf.slice(4,5))*7)+
                    (parseInt(this.cpf.slice(5,6))*6)+
                    (parseInt(this.cpf.slice(6,7))*5)+
                    (parseInt(this.cpf.slice(8,9))*4)+
                    (parseInt(this.cpf.slice(9,10))*3)+
                    (parseInt(this.cpf.slice(10,11))*2);
    this.resto1 = this.somacpf1 % 11;
    this.digito1 = 11 - this.resto1;
    
    //Obetendo o Segundo Digito Verficador
    this.somacpf1 = (parseInt(this.cpf.slice(0,1))*11)+
                    (parseInt(this.cpf.slice(1,2))*10)+
                    (parseInt(this.cpf.slice(2,3))*9)+
                    (parseInt(this.cpf.slice(4,5))*8)+
                    (parseInt(this.cpf.slice(5,6))*7)+
                    (parseInt(this.cpf.slice(6,7))*6)+
                    (parseInt(this.cpf.slice(8,9))*5)+
                    (parseInt(this.cpf.slice(9,10))*4)+
                    (parseInt(this.cpf.slice(10,11))*3)+
                    (parseInt(this.cpf.slice(12,13))*2);
    this.resto2 = this.somacpf2 % 11;
    this.digito2 = 11 - this.resto2;
  }

  ngOnInit() {
    
  }

}
