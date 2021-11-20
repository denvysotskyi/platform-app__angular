import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { RegisterRequestInterface } from '../interfaces/register-request.interface'
import { CurrentUserInterface } from '../../shared/types/current-user.interface'
import { AuthResponseInterface } from '../interfaces/auth-response.interface'
import { environment } from '../../../environments/environment'
import { LoginRequestInterface } from '../interfaces/login-request.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(res: AuthResponseInterface): CurrentUserInterface {
    return res.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }
}
