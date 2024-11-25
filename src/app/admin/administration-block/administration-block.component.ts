import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-administration-block',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './administration-block.component.html',
  styleUrl: './administration-block.component.css'
})
export class AdministrationBlockComponent {
  constructor(public r:Router){}
Logout(){
  
  this.r.navigate(['Admin'])
}
}
