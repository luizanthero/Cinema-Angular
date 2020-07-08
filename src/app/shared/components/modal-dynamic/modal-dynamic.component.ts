import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalDynamic } from '../../models';

@Component({
  selector: 'cine-modal-dynamic',
  templateUrl: './modal-dynamic.component.html',
  styleUrls: ['./modal-dynamic.component.css'],
})
export class ModalDynamicComponent implements OnInit {
  result: ModalDynamic;

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

  save(): void {}
}
