import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-item1',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.css'})
export class Item1Component {
  constructor(public memus:FirebaseService,public routes:ActivatedRoute,public rou:Router){}
  menudata:any=[]
  cattype:any
  idd=0;
  async ngOnInit(){
    if(this.memus.placeOrder.length==0){  
      const z= await this.memus.getData()
    z.forEach((doc:any)=>{
      this.menudata.push({'name':doc.menudat.name,'price':doc.menudat.price,'id':this.idd,
                            'category':doc.menudat.category,'value':0})
                    this.idd+=1
      console.log(this.menudata)})}
    else{this.menudata=await this.memus.placeOrder}
    // await this.memus.getData().then((menuItems) => {
    // console.log("Menu Items: ", menuItems);
    // this.menudata=menuItems
    // })
    // .catch((error) => {console.error("Error: ", error);});
    this.routes.queryParamMap.subscribe(fqparams=>{
      this.cattype=fqparams.get('cattype');
    console.log(this.cattype)})
  }
  add(a:any){
    this.menudata[a]={'name':this.menudata[a].name,'price':this.menudata[a].price,
      'id':this.menudata[a].id,'category':this.menudata[a].category,'value':this.menudata[a].value+1}}
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

  async order(){this.memus.placeOrder=await this.menudata
    this.rou.navigate(['/User/order'])
  }
}
