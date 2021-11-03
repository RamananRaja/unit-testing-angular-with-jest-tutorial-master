import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestJestComponent } from './test-jest/test-jest.component';

const routes: Routes = [
  { path: '', component: TestJestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
