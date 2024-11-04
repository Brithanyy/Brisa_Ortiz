import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuchillos } from '../interface/Cuchillo';

@Injectable({
  providedIn: 'root'
})
export class GestionCuchillosService {

  constructor() { }

  http = inject(HttpClient);
  url_base = 'http://localhost:3000/cuchillos';

  getCuchillo(id : string) : Observable<Cuchillos> {
    return this.http.get<Cuchillos>(`${this.url_base}/${id}`);
  }

  getCuchillos() : Observable<Cuchillos[]> {
    return this.http.get<Cuchillos[]>(this.url_base);
  }

  postCuchillo(cuchillo : Cuchillos) : Observable<Cuchillos> {
    return this.http.post<Cuchillos>(this.url_base, cuchillo);
  }

  putCuchillo(id : string | undefined, cuchillo : Cuchillos) : Observable<Cuchillos> {
    return this.http.put<Cuchillos>(`${this.url_base}/${id}`, cuchillo);
  }

  deleteCuchillo(id : string | undefined) : Observable<Cuchillos> {
    return this.http.delete<Cuchillos>(`${this.url_base}/${id}`);
  }
}
