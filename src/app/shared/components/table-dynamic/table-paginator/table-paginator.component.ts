import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'cine-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.css'],
})
export class TablePaginatorComponent implements OnChanges {
  @Input() dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnChanges(): void {
    this.dataSource.paginator = this.paginator;
  }
}
