import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'cine-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.css'],
})
export class TableDynamicComponent implements OnChanges {
  @Input() dataSource: any;
  @Input() columns: any;

  //#region [Paginator]
  @Input() isPaginate: boolean = false;
  @Input() dataLength: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageSizeOptions: any = [5, 10, 25, 100];
  @Input() pageIndex: number = 0;
  //#endregion

  //#region [Buttons]
  @Input() hasAction: boolean;
  @Input() actions: any;
  //#endregion

  @Output() rowAction = new EventEmitter();
  @Output() sendPaginatorAction = new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private action: boolean = false;

  columnsObject: any[] = [];
  isEmpty: boolean = false;

  constructor() {}

  ngOnChanges(): void {
    if (this.columns && !this.action) {
      this.addActionButtons();
      this.columnsObject = this.columns.map((item) =>
        typeof item.column === 'number' ? item.column.toString() : item.column
      );
    }

    if (this.dataSource) {
      this.dataSource = new MatTableDataSource(this.dataSource);
      this.dataSource.sort = this.sort;
    }
  }

  addActionButtons(): void {
    if (this.hasAction) {
      this.action = true;

      const actionColumn = {
        column: 'actions',
        title: 'Actions',
      };

      this.actions
        ? (this.columns = [...this.columns, actionColumn])
        : (this.columns = this.columns);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    if (this.dataSource.filteredData.length === 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  receiveAction(action, row): void {
    let content = { row: '', action: '' };
    content.action = action;
    content.row = row;

    this.rowAction.emit(content);
  }

  paginatorAction(event): void {
    this.sendPaginatorAction.emit(event);
  }
}
