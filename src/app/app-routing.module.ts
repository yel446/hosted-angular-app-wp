import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtherComponent } from './pages/other/other.component';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'other', component: OtherComponent },
  {
    path: 'remote',
    loadChildren: () =>
      import('remoteApp/Component1').then((m) => m.Component1Module),
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'https://remote-app-wp-test.vercel.app/remoteEntry.js',
      remoteName: 'remote_app_wp',
      exposedModule: './Welcome',
      elementName: 'Welcome',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'angular1',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'remoteApp',
      exposedModule: './Component1',
      elementName: 'app-component1',
    } as WebComponentWrapperOptions,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
