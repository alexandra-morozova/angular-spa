import { CanActivateFn } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {
  // I am sure you can activate only page in my dummy application! 
  return true;
};
