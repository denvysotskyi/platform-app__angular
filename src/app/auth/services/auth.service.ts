import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { RegisterRequestInterface } from '../interfaces/register-request.interface'
import { CurrentUserInterface } from '../../shared/interfaces/current-user.interface'
import { AuthResponseInterface } from '../interfaces/auth-response.interface'
import { LoginRequestInterface } from '../interfaces/login-request.interface'
import { environment } from '../../../environments/environment'

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

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'

    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }
}
