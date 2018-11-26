import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'contact', loadChildren: 'app/contact-us/contact-us.module#ContactUsModule' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'gallery', loadChildren: 'app/gallery/gallery.module#GalleryModule' },
    { path: 'add', loadChildren: 'app/add-user/add-user.module#AddUserModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
