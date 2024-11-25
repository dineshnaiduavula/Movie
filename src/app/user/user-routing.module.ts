import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { Item1Component } from './item1/item1.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"menu",component:MenuComponent,
    children:[{path:'item1',component:Item1Component},
    ]},
    {path:'order',component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
