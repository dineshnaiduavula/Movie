import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public memus:FirebaseService){}
  menudata:any=[]
  ngOnInit(){
    this.memus.getData().then((menuItems) => {
    console.log("Menu Items: ", menuItems);
    this.menudata=menuItems
    }).catch((error) => {
      console.error("Error: ", error);
    });
  }
//sending id numbers
  id(a:any){this.memus.idnumber=a;}
}
