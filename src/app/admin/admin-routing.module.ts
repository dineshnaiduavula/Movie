import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministrationBlockComponent } from './administration-block/administration-block.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ComplOrdersComponent } from './compl-orders/compl-orders.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Administration-Block',component:AdministrationBlockComponent,
    children:[{path:'menu',component:MenuComponent},
      {path:'item',component:ItemComponent},
              {path:'orders',component:OrdersComponent},
              {path:'compl-orders',component:ComplOrdersComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
