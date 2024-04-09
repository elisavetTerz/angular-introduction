import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const CHUCK_NORRIS_API_URL = "https://api.chucknorris.io/";
const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  
  http: HttpClient = inject(HttpClient);
}
