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
    let z=this.menudata.find((u:any)=>u.id==a)
    z.menudat.dd[0].orderstatus='compl'
    console.log(z.menudat)
     this.ser.orderUpdate(z)
    console.log(z)
  }
}
