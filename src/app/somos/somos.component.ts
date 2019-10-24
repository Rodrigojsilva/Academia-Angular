import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.css']
})
export class SomosComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoTrilha() {
    this.router.navigate(['trilha']);
   }

}
