import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.css'
})
export class Item1Component {
  constructor(public memus:FirebaseService,public routes:ActivatedRoute){}
  menudata:any=[]
  cattype:any
  async ngOnInit(){
    await this.memus.getData().then((menuItems) => {
    console.log("Menu Items: ", menuItems);
    this.menudata=menuItems
    }).catch((error) => {console.error("Error: ", error);});
    this.routes.queryParamMap.subscribe(fqparams=>{
      this.cattype=fqparams.get('cattype');
    console.log(this.cattype)})
   
  }
}
