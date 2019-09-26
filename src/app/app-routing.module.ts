import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FramePage } from './pages/shared/frame/frame.page';
import { AuthorizedGuard } from './guards/authorized.guards';
import { ManagerGuard } from './guards/manager.guard';

const routes: Routes = [
  {path: 'login', loadChildren: './pages/account/login/login.module#LoginPageModule'},
  {path: '',component: FramePage,
    canActivate: [AuthorizedGuard],
    children: [
      {path: '', loadChildren: './pages/home/home.module#HomePageModule'},
      { path: 'orders', loadChildren: './pages/store/orders/orders.module#OrdersPageModule' },
      { path: 'orders/:number', loadChildren: './pages/store/orders-details/orders-details.module#OrdersDetailsPageModule' }
    ]
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
