import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compl-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compl-orders.component.html',
  styleUrl: './compl-orders.component.css'
})
export class ComplOrdersComponent {
constructor(public ser:FirebaseService){}
menudata:any=[]
async ngOnInit(){
  await this.ser.getorderdata().then((f)=>{
    this.menudata=f
    console.log(this.menudata)})}

}
