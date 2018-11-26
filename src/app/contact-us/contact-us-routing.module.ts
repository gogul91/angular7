import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ContactUsComponent } from './contact-us.component';

const routes: Routes = [{ path: '', component: ContactUsComponent, data: { title: extract('Contact') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactUsRoutingModule {}
