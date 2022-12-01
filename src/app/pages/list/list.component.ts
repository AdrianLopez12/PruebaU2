import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { personas } from './domain/personas';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  personas: any;
  private personasCollection: AngularFirestoreCollection<personas>;

  constructor(
    private router: Router,
    private ServiciosService: ServiciosService,
    private afs: AngularFirestore
  ) {
    this.personasCollection = afs.collection<personas>('personas');
  }
  loadProducts() {
    // this.lstProducts = this.productsService.getProducts();
    this.personas = this.ServiciosService.getProductsFire();
    console.log(this.personas);
  }
}
