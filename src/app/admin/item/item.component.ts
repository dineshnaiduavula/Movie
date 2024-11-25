import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FirebaseService } from '../../firebase.service';
import { CommonModule } from '@angular/common';
import { getFirestore,collection,getDocs, addDoc} from 'firebase/firestore';
import { EMPTY } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  constructor(public routes:ActivatedRoute,public fireser:FirebaseService,
    public r:Router){}
    name:any ; price:any; category:any;
 async ngOnInit(){
    this.k=0
    this.routes.queryParamMap.subscribe(fqparams=>{
       this.itemtype=fqparams.get('type');
      console.log(this.itemtype)})
      this.fireser.getData().then(async (menuItems) => {
        console.log("Menu Items: ", menuItems);
      this.itemdata=await menuItems.find((u:any)=>u.id==this.fireser.idnumber)
        
        //this.k=1;
        // console.log(this.itemdata)
        // console.log(this.k)
        if(this.itemdata){this.k=1;
          this.name=this.itemdata.menudat.name
        this.price=this.itemdata.menudat.price
        this.category=this.itemdata.menudat.category
        }
        // else{this.k=0}
        // console.log(this.itemdata)
        }).catch((error) => {console.error("Error: ", error);});
    }
async newitem(){
  let data={name:this.name,price:this.price,category:this.category}
await this.fireser.addData(data).catch((error) => {console.error("Error: ", error)})
this.k=0;
this.fireser.idnumber=0
this.r.navigate(['/Admin/Administration-Block/menu']);}
  async deletee(){
    await this.fireser.delete()
    this.k=0;
this.fireser.idnumber=0
    this.r.navigate(['/Admin/Administration-Block/menu']);
  }
  async update(){
    let z={name:this.name,price:this.price,category:this.category,id:this.itemdata.id}
await this.fireser.update(z)
this.k=0;
this.fireser.idnumber=0
    this.r.navigate(['/Admin/Administration-Block/menu']);
  }
//getting same item data
//itemdata=this.fireser.getData
itemdata:any
k=0
itemtype:any
back(){
  this.k=0;
this.fireser.idnumber=0
    this.r.navigate(['/Admin/Administration-Block/menu']);
}
}