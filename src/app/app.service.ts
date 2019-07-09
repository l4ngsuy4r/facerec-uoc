import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor (private http: HttpClient) {}

  validate (body: ValidateRequest): Observable<ValidateResponse> {
    const headers = new HttpHeaders({
      'x-api-key': 'l4tbwudR2m151MP1ehyNGekLyaZbhTH1HSbmnQLh'
    })
    return this.http.post<ValidateResponse>('testing/UserRegistration', body, {
      headers
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
