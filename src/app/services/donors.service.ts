import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donor } from '../models/donor.model';
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DonorsService {

  constructor(private httpClient: HttpClient) { }
  private reloadDonorsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadDonors$: Observable<boolean> = this.reloadDonorsSubject.asObservable();

  getDonors():Observable<Donor[]>{
    let url = 'https://localhost:44387/api/Gift/GetDonors'
    return this.httpClient.get<Donor[]>(url);
  }

  getDonorById(id: number): Observable<Donor> {
    let url = 'https://localhost:44387/api/Gift/GetDonor' + id;
    return this.httpClient.get<Donor>(url);
  }

  saveDonor(donor: Donor) :Observable<boolean>{
    let url = 'http://localhost:44387/api/Gift/UpdateDonor';
    return this.httpClient.put<boolean>(url, donor);
  }

  addDonor(donor: Donor): Observable<number> {
    let url = 'http://localhost:44387/api/Gift/AddGift';
    return this.httpClient.put<number>(url, donor);

  }

  deleteDonor(id: number): Observable<boolean> {
    let url = 'http://localhost:44387/api/Gift/DeleteDonor';
    return this.httpClient.put<boolean>(url, id);

  }

}
