import { Routes } from '@angular/router';
import { ReactiveFormPractice } from './reactive-form-practice/reactive-form-practice';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reactive-form', component: ReactiveFormPractice }
];
