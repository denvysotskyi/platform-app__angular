import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { RegisterRequestInterface } from '../interfaces/registerRequest.interface'
import { CurrentUserInterface } from '../../shared/types/currentUser.interface'
import { AuthResponseInterface } from '../interfaces/authResponse.interface'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((res: AuthResponseInterface) => res.user))
  }
}
