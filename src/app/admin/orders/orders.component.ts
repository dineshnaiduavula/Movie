import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  constructor(public ser:FirebaseService){}
  menudata:any=[]
  async ngOnInit(){
    await this.ser.getorderdata().then((f)=>{
      this.menudata=f
      console.log(this.menudata)})}
  done(a:any){
    
    //await this.ser.orderUpdate(a)
    console.log(a)
  }
}
