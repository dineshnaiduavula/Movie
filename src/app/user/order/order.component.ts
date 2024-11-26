import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(public memus:FirebaseService,public routes:ActivatedRoute,public rou:Router){}
  menudata:any=[]
  async ngOnInit(){this.menudata=await this.memus.placeOrder}
  minus(a:any){
    if(this.menudata[a].value>=1){
      this.menudata[a]={'name':this.menudata[a].name,'price':this.menudata[a].price,
        'id':this.menudata[a].id,'category':this.menudata[a].category,'value':this.menudata[a].value-1}}
    else{
      this.menudata[a]={'name':this.menudata[a].name,'price':this.menudata[a].price,
        'id':this.menudata[a].id,'category':this.menudata[a].category,'value':0}}}
  plus(a:any){
    this.menudata[a]={'name':this.menudata[a].name,'price':this.menudata[a].price,
      'id':this.menudata[a].id,'category':this.menudata[a].category,'value':this.menudata[a].value+1}}
  async menu(){
    this.memus.placeOrder=await this.menudata
    this.rou.navigate(['/User/menu'])
  }
}
