import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',pathMatch:"full",redirectTo:"User"},
    {path:'Admin',loadChildren:()=>import
        ("../app/admin/admin.module").then(m=>m.AdminModule)},
    {path:'User',loadChildren:()=>import
        ("../app/user/user.module").then(m=>m.UserModule)},
];
