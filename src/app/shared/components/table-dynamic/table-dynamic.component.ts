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
  @Input() tableName: string;
  @Input() dataSource: any;
  @Input() columns: any;

  @Output() rowAction = new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private roles: number[] = [];
  private actions: boolean = false;

  columnsObject: any[] = [];

  constructor() {
    sessionStorage
      .getItem('roles')
      .split(',')
      .map((item) => {
        this.roles.push(+item);
      });
  }

  ngOnChanges(): void {
    if (this.columns && !this.actions) {
      this.addActionButtons();
      this.columnsObject = this.columns.map((item) =>
        typeof item.column === 'number' ? item.column.toString() : item.column
      );
    }

    if (this.dataSource) {
      this.dataSource = new MatTableDataSource(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  addActionButtons(): void {
    const actionColumn = {
      column: 'actions',
      title: 'Actions',
    };

    this.actions = true;

    this.actions
      ? (this.columns = [...this.columns, actionColumn])
      : (this.columns = this.columns);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sendAction(action, row): void {
    let content = { row: '', action: '' };
    content.action = action;
    content.row = row;
    this.rowAction.emit(content);
  }

  getSelectPermission(): boolean {
    return this.roles.some((el, index, array) => el === 1);
  }

  getUpdatePermission(): boolean {
    return this.roles.some((el, index, array) => el === 3);
  }

  getDeletePermission(): boolean {
    return this.roles.some((el, index, array) => el === 4);
  }
}
