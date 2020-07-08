import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dynamic',
  templateUrl: './modal-dynamic.component.html',
  styleUrls: ['./modal-dynamic.component.css'],
})
export class ModalDynamicComponent implements OnInit {
  result: any;

  constructor(
    private dialog: MatDialogRef<ModalDynamicComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.result = data;
  }

  ngOnInit(): void {}

  close(): void {
    this.dialog.close();
  }
}
