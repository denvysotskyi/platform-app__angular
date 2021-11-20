import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppStateInterface } from '../../../shared/types/app-state.interface'
import { RegisterRequestInterface } from '../../interfaces/register-request.interface'
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface'
import { registerAction } from '../../store/actions/register-actions'
import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors/selectors'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
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
