import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  let islogin=localStorage.getItem('admin')
  let userFlag:boolean=Boolean(islogin)
  if(userFlag){
    return true
  }else{
    alert(`Not Admin.....`)
    return false
  }

};
