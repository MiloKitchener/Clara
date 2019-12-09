import { Component, OnInit } from '@angular/core';
import { LabServicesService } from 'src/app/services/lab-services/lab-services.service';
import { MatDialog } from "@angular/material";
import { LabServicesOptionsComponent } from 'src/app/lab-services-options/lab-services-options.component';

@Component({
  selector: 'app-lab-services',
  templateUrl: './lab-services.component.html',
  styleUrls: ['./lab-services.component.scss']
})
export class LabServicesComponent implements OnInit {

  cards: [];
  newCard: any;
  panelOpenState = false;

  constructor(private labServicesService: LabServicesService, private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LabServicesOptionsComponent, {
      width: '500px',
      maxHeight: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newCard = result;
      console.log(this.newCard);
      console.log('The dialog was closed');
    });
  }
  
  public objectives = [];

  ngOnInit() {
    this.labServicesService.getPilots().then((results) => {
      this.cards = results.items;
    });
  }

}
