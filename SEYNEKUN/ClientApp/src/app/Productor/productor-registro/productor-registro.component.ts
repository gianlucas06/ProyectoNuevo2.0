import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
import { Productor } from '../models/productor';
import { ProductorService } from 'src/app/services/productor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  formGroup: FormGroup;
productor: Productor;
  constructor(private productorService:ProductorService,private _formBuilder: FormBuilder,
    private modalService: NgbModal) { }

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
    this.buildForm();
  }
  private buildForm() {
    this.productor = new Productor();

this.productor.cedula = '';

this.productor.nombre = '';

this.productor.codigoProductor = '';

this.productor.numeroTelefonico = '';

this.productor.afiliacion = '' ;

this.productor.actividad = '' ;



    this.formGroup = this._formBuilder.group({
      cedula: [this.productor.cedula, Validators.required],

      nombre: [this.productor.nombre, Validators.required],
      
      codigoProductor: [this.productor.codigoProductor, Validators.required],
      
      numeroTelefonico: [this.productor.numeroTelefonico, [Validators.required, Validators.min(1)]],
      afiliacion : [this.productor.afiliacion, Validators.required],
      actividad: [this.productor.actividad, Validators.required],


     });
  }
  get control() {

    return this.formGroup.controls;
    
    }
  next() {
    this.stepper.next();
  }
  onSubmit() {
    if (this.formGroup.invalid) {

      return;
      
      }
      
      this.add();
  }
  add(){
    this.productor = this.formGroup.value;
    this.productorService.post(this.productor).subscribe(p => {

      if (p != null) {
      
      alert('Productor a sido guardado');
      
      this.productor= p;
      
      }
      
      });
  }

}
