import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { personas } from '../pages/list/domain/personas';
@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  personas: any;
  private personasCollection: AngularFirestoreCollection<personas>;
  constructor(private afs: AngularFirestore) {
    this.personasCollection = afs.collection<personas>('personas');
  }
  getProductsFire() {
    return this.personasCollection.valueChanges();
  }
}
