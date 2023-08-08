import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let getToken=localStorage.getItem("pmToken");
  if(getToken!==null&& getToken!==""){
    return true;
  } 
  return false;
};
