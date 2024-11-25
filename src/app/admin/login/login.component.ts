import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public r:Router,public fireser:FirebaseService ){}
  id:any;
  pass:any
async login(){
  await this.fireser.getAdminIdPass().then((admindata)=>{
    console.log(this.id)
    console.log(admindata)
    let k=admindata.find((u:any)=>(u.admindata.Password==this.pass) &&(u.admindata.Login==this.id))
    if(k!){this.r.navigate(['Admin/Administration-Block'])}
    else{console.log('wrong id or pass')}
    })
}
}
