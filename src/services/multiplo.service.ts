import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Multiplo } from 'src/models/multiplos';
@Injectable({
  providedIn: 'root',
})
export class MultiploService {
  constructor(private firestore: Firestore) {}

  guardarRegistroMultiplo(multiplo: MultiploService) {
    const multiploRef = collection(this.firestore, 'multiplo');
    return addDoc(multiploRef, multiplo);
  }

  obtenerRegistros(): Observable<Multiplo[]> {
    const multiploRef = collection(this.firestore, 'multiplo');

    return collectionData(multiploRef, { idField: 'id' }) as Observable<Multiplo[]>;
  }
}
