import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';
import { Item4Component } from './item4/item4.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"menu",component:MenuComponent,
    children:[{path:'item1',component:Item1Component},
              {path:'item2',component:Item2Component},
              {path:'item3',component:Item3Component},
              {path:'item4',component:Item4Component}
    ]},
    {path:'order',component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
