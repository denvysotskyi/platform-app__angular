import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors/auth-selectors'
import { AppStateInterface } from '../../../shared/interfaces/app-state.interface'
import { BackendErrorsInterface } from '../../../shared/interfaces/backend-errors.interface'
import { RegisterRequestInterface } from '../../interfaces/register-request.interface'
import { registerAction } from '../../store/actions/register-actions'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }

    this.store.dispatch(registerAction({ request }))
    this.form.reset()
  }
}
