import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-services-options',
  templateUrl: './lab-services-options.component.html',
  styleUrls: ['./lab-services-options.component.scss']
})
export class LabServicesOptionsComponent implements OnInit {

  newPilot = this.fb.group({
    pilotName: ['', Validators.required],
    pilotDesc: ['', Validators.required],
    picker1: ['', Validators.required],
    picker2: ['', Validators.required],
    budget: ['', Validators.required],
    contact: ['', Validators.required],
    stakeholders: ['', Validators.required],
    objectives: this.fb.array([
      this.fb.control('')
    ])
  });

  get objectives() {
    return this.newPilot.get('objectives') as FormArray;
  }

  constructor(private dialog: MatDialog, private fb: FormBuilder) { }

  addObjective() {
    this.objectives.push(this.fb.control(''));
  }

  removeObjective() {
    if (this.objectives.length === 0) {
      console.log('Cannot have less than zero objectives.')
    } else {
      this.objectives.removeAt(-1)
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newPilot.value);
  }

  ngOnInit() {}
  
}
