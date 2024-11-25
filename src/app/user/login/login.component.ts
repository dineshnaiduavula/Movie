import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FirebaseService } from '../../firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public memus:FirebaseService,public route:Router){}
  name:any;phone:any;seat:any;
  // ngOnInit(){
  //   this.memus.getData().then((menuItems) => {
  //   console.log("Menu Items: ", menuItems);
  //   }).catch((error) => {
  //     console.error("Error: ", error);
  //   });
  login(){
    console.log(this.name+""+this.phone)
    //code
    this.route.navigate(['User/menu'])
  }
}
