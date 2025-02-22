import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appartment } from 'src/core/models/Appartment';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
  newApart!: Appartment;

  AddAppart = new FormGroup({
  apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
  floorNum: new FormControl('', [Validators.required, Validators.min(2), Validators.pattern('^[0-9]+$')]),
  surface:new FormControl('',Validators.required),
  terrace:new FormControl('yes',Validators.required),
  surfaceterrace: new FormControl({ value: '', disabled: false }, Validators.required),
  category:new FormControl('S+1',Validators.required),
  ResidenceId:new FormControl('',Validators.required)
});

onTerraceChange() {
  if (this.AddAppart.get('terrace')?.value === 'yes') {
    this.AddAppart.get('surfaceterrace')?.enable();
  } else {
    this.AddAppart.get('surfaceterrace')?.disable();
    this.AddAppart.get('surfaceterrace')?.setValue('');
  }
}

onSubmit() {
  if (this.AddAppart.valid) {
    this.newApart = {
      apartNum: Number(this.AddAppart.get('apartNum')?.value),
      floorNum: Number(this.AddAppart.get('floorNum')?.value),
      surface: Number(this.AddAppart.get('surface')?.value),
      terrace: this.AddAppart.get('terrace')?.value === 'yes',
      surfaceterrace: this.AddAppart.get('surfaceterrace')?.value ? Number(this.AddAppart.get('surfaceterrace')?.value) : 0,
      category: this.AddAppart.get('category')?.value || '',
      ResidenceId: Number(this.AddAppart.get('ResidenceId')?.value),
    };

    console.log('New Apartment:', this.newApart);
  }
}

resetForm() {
  this.AddAppart.reset({
    apartNum: '',
    floorNum: '',
    surface: '',
    terrace: 'yes',
    surfaceterrace: '',
    category: 'S+1',
    ResidenceId: ''
  });
  this.onTerraceChange();
}

}
