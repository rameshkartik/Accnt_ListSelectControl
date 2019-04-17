import { Routes, RouterModule } from '@angular/router';
import { ListSelectComponent } from './listview/index'

const routes: Routes = [
  { path: '', component: ListSelectComponent },

  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);

