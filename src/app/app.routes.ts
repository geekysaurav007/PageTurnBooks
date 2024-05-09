import { Routes} from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';



export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'signUp',component:SignUpComponent}
];
