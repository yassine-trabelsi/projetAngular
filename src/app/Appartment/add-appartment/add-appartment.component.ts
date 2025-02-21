import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {

  AddAppart = new FormGroup({ 
  apartNum:new FormControl('',Validators.required),
  floorNum:new FormControl('',[Validators.required,Validators.min(2)]),
  surface:new FormControl(''),
  terrace:new FormControl('yes'),
  surfaceterrace:new FormControl(''),
  category:new FormControl(''),
  ResidenceId:new FormControl('')
});
}
