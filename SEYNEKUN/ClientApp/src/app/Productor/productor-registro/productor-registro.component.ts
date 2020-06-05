import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
import { Productor } from '../models/productor';
import { ProductorService } from 'src/app/services/productor.service';

@Component({
  selector: 'app-productor-registro',
  templateUrl: './productor-registro.component.html',
  styleUrls: ['./productor-registro.component.css']
})
export class ProductorRegistroComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private stepper: Stepper;
  
productor: Productor;
  constructor(private productorService:ProductorService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }
  next() {
    this.stepper.next();
  }
  onSubmit() {
    return false;
  }
  add(){
    this.productorService.post(this.productor).subscribe(p => {

      if (p != null) {
      
      alert('Persona creada!');
      
      this.productor= p;
      
      }
      
      });
  }

}
