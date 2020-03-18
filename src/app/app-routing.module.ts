import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'devices',
        loadChildren:() => import('./devices/devices.module').then(m => m.DevicesModule)
    },
    {
        path:'graphs',
        loadChildren:() => import('./graphs/graphs.module').then(m => m.GraphsModule)
    },
    {
        path:'credits',
        loadChildren:() => import('./credits/credits.module').then(m => m.CreditsModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }     
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}