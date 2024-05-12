import { Routes} from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { MyCartComponent } from './USER/my-cart/my-cart.component';
import { ThankYouComponent } from './common/thank-you/thank-you.component';
import { MyOrdersComponent } from './USER/my-orders/my-orders.component';



export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'signUp',component:SignUpComponent},
    {path:'my-cart',component:MyCartComponent},
    {path:'confirm',component:ThankYouComponent},
    {path:'myorder/:id',component:MyOrdersComponent}
];
