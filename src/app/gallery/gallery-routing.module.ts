import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [{ path: '', component: GalleryComponent, data: { title: extract('Gallery') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GalleryRoutingModule {}
