import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo:'admin', pathMatch: 'full'},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'authentication', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });