import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule],
  declarations: [AddUserComponent]
})
export class AddUserModule {}
