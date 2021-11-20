import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { RegisterComponent } from './components/register/register.component'
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BackendErrorMessagesModule
  ],
  exports: [RegisterComponent]
})
export class AuthModule {}
