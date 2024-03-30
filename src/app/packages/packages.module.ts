import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';
import { LatestPackagesComponent } from './latest-packages/latest-packages.component';
import { CategoriesComponent } from './categories/categories.component';
import { PackagesRoutingModule } from './packages-routing.module';
import { FeaturedPackagesComponent } from './featured-packages/featured-packages.component';
@NgModule({
  declarations: [
    PackagesListComponent,
    PackagesDetailsComponent,
    LatestPackagesComponent,
    CategoriesComponent,
    FeaturedPackagesComponent,
  ],
  imports: [CommonModule, PackagesRoutingModule],
  exports: [LatestPackagesComponent],
})
export class PackagesModule {}
