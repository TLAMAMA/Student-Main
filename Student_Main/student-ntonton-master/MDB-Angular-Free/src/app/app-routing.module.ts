import { NgModule } from '@angular/core';
import {  Routes,RouterModule} from '@angular/router';
import { StudentInfoComponent } from "./components/student-info/StudentInfoComponent";


const routes: Routes=[
  {path: '', redirectTo: './components/student-info', pathMatch: 'full'},
  { path: 'student-info', component: StudentInfoComponent },
  { path: '**', component: StudentInfoComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
