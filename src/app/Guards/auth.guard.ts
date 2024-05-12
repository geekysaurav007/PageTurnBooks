import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let islogin=localStorage.getItem('user')
  let userFlag:boolean=Boolean(islogin)
  if(userFlag){
    return true
  }else{
    return false
  }

};
