import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { Company } from './models/company';
import { CommonModule } from '@angular/common';
import { GetinfoService } from './getinfo.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AngularFirestoreModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfire-example';
  
  company$: Observable<Company | undefined>;

  constructor(private db: AngularFirestore, private infoService: GetinfoService) {
    this.company$ = infoService.getCompany();
    this.company$.subscribe(company => console.log(company));
  }
}
