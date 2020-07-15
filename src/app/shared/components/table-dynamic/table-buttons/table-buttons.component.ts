import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

import { TableButtons } from './table-buttons.config';

@Component({
  selector: 'cine-table-buttons',
  templateUrl: './table-buttons.component.html',
  styleUrls: ['./table-buttons.component.css'],
})
export class TableButtonsComponent implements OnChanges {
  @Input() actions: any[];

  @Output() buttonClick = new EventEmitter();

  buttonsConfig = TableButtons;
  buttons: any[];

  constructor() {}

  ngOnChanges(): void {
    let button: any[] = [];
    this.actions.forEach((item) => {
      if (this.buttonsConfig[0][item.column]) {
        button.push({
          ...item,
          order: this.buttonsConfig[0][item.column].order,
        });
      }
    });

    this.buttons = button.sort((a, b) =>
      a.order.toString().localeCompare(b.order)
    );
  }

  sendAction(action): void {
    this.buttonClick.emit(action);
  }
}
