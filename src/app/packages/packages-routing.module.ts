import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';
import { PackagesListComponent } from './packages-list/packages-list.component';

const routes: Routes = [
  { path: 'packages', component: PackagesListComponent },
  { path: 'packages/:id', component: PackagesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PackagesRoutingModule {}
