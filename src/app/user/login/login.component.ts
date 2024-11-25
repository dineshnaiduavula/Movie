import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public memus:FirebaseService){}
  // ngOnInit(){
  //   this.memus.getData().then((menuItems) => {
  //   console.log("Menu Items: ", menuItems);
  //   }).catch((error) => {
  //     console.error("Error: ", error);
  //   });
}
