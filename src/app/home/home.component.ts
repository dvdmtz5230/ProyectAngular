import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { values } from 'ramda';
import { finalize } from 'rxjs/operators';
import { Multiplo } from 'src/models/multiplos';
import { validateLocaleAndSetLanguage } from 'typescript';
import { MultiploService } from 'src/services/multiplo.service';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  quote: string | undefined;
  isLoading = false;

  result: string = '';
  color: string = '';

  constructor(private quoteService: QuoteService, private fb: FormBuilder, private MultiploService: MultiploService) {
    this.form = this.fb.group({
      numeroMultiplo: ['', Validators.required],
      multiplosDeNumero: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.MultiploService.obtenerRegistros().subscribe((multiplo) => {
      console.log(multiplo);
    });

    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }

  consultarNumero() {
    var numero = this.form.value['numeroMultiplo'];

    let multiplos = [3, 5, 7];
    let resultMultiplos = [];
    multiplos.forEach((multiplo) => {
      var residuo = numero % multiplo;

      if (residuo == 0) {
        resultMultiplos.push(Number(multiplo));
      }
    });
    if (resultMultiplos.length == 0) {
      resultMultiplos.push('No es multiplo de 3,5 o 7');
    }
    console.log(numero, resultMultiplos);
    if (resultMultiplos.length == 0) {
    }
    this.result = 'El numero  ' + numero + '  es multiplo de ' + resultMultiplos.toString();

    switch (Number(resultMultiplos[0])) {
      case 3:
        this.color = 'green';
        break;
      case 5:
        this.color = 'red';
        break;
      case 7:
        this.color = 'blue';
        break;

      default:
        this.color = '';
        break;
    }

    console.log(this.color);

    this.form.value.multiplosDeNumero = resultMultiplos;

    console.log(this.form.value);
    this.MultiploService.guardarRegistroMultiplo(this.form.value).then(
      () => {
        console.log('registro exitoso');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
