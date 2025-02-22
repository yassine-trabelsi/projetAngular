import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {

  AddAppart = new FormGroup({
  apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
  floorNum: new FormControl('', [Validators.required, Validators.min(2), Validators.pattern('^[0-9]+$')]),
  surface:new FormControl('',Validators.required),
  terrace:new FormControl('yes',Validators.required),
  surfaceterrace: new FormControl({ value: '', disabled: false }, Validators.required),
  category:new FormControl('',Validators.required),
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
}
