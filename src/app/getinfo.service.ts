import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Company } from './models/company';

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  company$: Observable<Company | undefined>;

  constructor(private db: AngularFirestore) { }

  getCompany(){
    return this.db.doc<Company>('companies/company').valueChanges();
  }
}
