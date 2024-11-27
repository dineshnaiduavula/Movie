import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FirebaseService } from '../../firebase.service';
import { FormsModule } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(public memus:FirebaseService,public routes:ActivatedRoute,public rou:Router){}
  menudata:any=[]
  Totalprice=0;
  async ngOnInit(){this.menudata=await this.memus.placeOrder
    for(let i=0;i<this.menudata.length;i++){
      if(this.menudata[i].value>=0){
        this.Totalprice+=this.menudata[i].price *this.menudata[i].value}}
  }
  minus(a:any){
    if(this.menudata[a].value>=1){
      this.menudata[a]={'name':this.menudata[a].name,'price':this.menudata[a].price,
        'id':this.menudata[a].id,'category':this.menudata[a].category,'value':this.menudata[a].value-1}
        this.Totalprice=0;
        for(let i=0;i<this.menudata.length;i++){
          if(this.menudata[i].value>=0){
            this.Totalprice+=this.menudata[i].price *this.menudata[i].value}}}
    else{
      this.menudata[a]={'name':this.menudata[a].name,'price':this.menudata[a].price,
        'id':this.menudata[a].id,'category':this.menudata[a].category,'value':0}}
        this.Totalprice=0
        for(let i=0;i<this.menudata.length;i++){
          if(this.menudata[i].value>=0){
            this.Totalprice+=this.menudata[i].price *this.menudata[i].value}}}
  plus(a:any){
    this.menudata[a]={'name':this.menudata[a].name,'price':this.menudata[a].price,
      'id':this.menudata[a].id,'category':this.menudata[a].category,'value':this.menudata[a].value+1}
      this.Totalprice=0
      for(let i=0;i<this.menudata.length;i++){
        if(this.menudata[i].value>=0){
          this.Totalprice+=this.menudata[i].price *this.menudata[i].value}}}
  async menu(){
    this.memus.placeOrder=await this.menudata
    this.rou.navigate(['/User/menu'])
  }
  async paymentandplaceorder(){
    let orderdetails:any[]=[]
    for(let i=0;i<this.menudata.length;i++){
      if(this.menudata[i].value>=1){
         orderdetails.push({name:this.menudata[i].name,price:this.menudata[i].price,
        category:this.menudata[i].category,value:this.menudata[i].value})}}
        //
     orderdetails.unshift  ({name:this.memus.userLoginDetails.name,phone:this.memus.userLoginDetails.phone,
                       seat:this.memus.userLoginDetails.seat,totalPayment:this.Totalprice,orderstatus:'uncompl'})
      let k=this.memus.addorder(orderdetails)
      console.log(k)
  }
}
