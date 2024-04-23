import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Customer } from '../interfaces/customer';
const API_URL = `${environment.apiURL}/customer`

@Injectable({
    provideIn: 'root'
})
export class CustomerService {
    http: HttpClient = inject(HttpClient);

    createCustomer(customer: Customer) {
        return this.http.post<msg: string>(`${API_URL}/crea†e`)
    }
}