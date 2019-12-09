import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { LabServicesService } from 'src/app/services/lab-services/lab-services.service';

@Component({
  selector: 'app-lab-services-options',
  templateUrl: './lab-services-options.component.html',
  styleUrls: ['./lab-services-options.component.scss']
})
export class LabServicesOptionsComponent implements OnInit {

  newPilot = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    start: ['', Validators.required],
    end: ['', Validators.required],
    budget: ['', Validators.required],
    contact: ['', Validators.required],
    stakeholders: this.fb.array([
      this.fb.control('')
    ]),
    objectives: this.fb.array([
      this.fb.control('')
    ])
  });

  get objectives() {
    return this.newPilot.get('objectives') as FormArray;
  }

  get stakeholders() {
    return this.newPilot.get('stakeholders') as FormArray;
  }
  
  constructor(private dialog: MatDialog, private fb: FormBuilder, private labServicesService: LabServicesService) { }

  addSH() {
    this.stakeholders.push(this.fb.control(''));
  }

  removeSH() {
    if (this.stakeholders.length === 0) {
      console.log('Cannot have less than zero stakeholders.')
    } else {
      this.stakeholders.removeAt(-1)
    }
  }

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
    var objpush = this.newPilot.controls['objectives'].value
    delete this.newPilot.value.objectives

    this.labServicesService.pushPilot(this.newPilot.value).then(result => {
      objpush.forEach(element => {
        this.labServicesService.pushObjectives({
            "content": element,
            "objectivePilotId": result.id,
            "state": false
          })
      });
    });
  }

  ngOnInit() {}

}
