import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Sem ter o que fazer no fim de semana ?', 'Não perca mais tempo...', 'Venha trilhar conosco.'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };

    const typed = new Typed('.typing-element', options);
  }

  gotoCadastroClientes() {
    this.router.navigate(['cadastro-clientes']);
   }
}

