import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  validate(body: ValidateRequest): Observable<ValidateResponse> {
    return this.http.post<ValidateResponse>('testing/UserRegistration', body, {
      headers: new HttpHeaders({
        'x-api-key': '3yu6vxRwsR5YOXzbHuwYf9aiClHvsYXN48npsIgd'
      })
    })
  }
}

export interface ValidateResponse {
  registrationErrorListPerImage: {
    imageID: string
    errorList: Error[]
  }[]
  registrationErrorList: Error[]
}

interface Error {
  id: string
  message: string
}

export interface ValidateRequest {
  uid: string
  pics: string[]
}
