import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
export const routes: Routes = [
  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
];
