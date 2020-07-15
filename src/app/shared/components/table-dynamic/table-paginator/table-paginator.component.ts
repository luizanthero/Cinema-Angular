import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'cine-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.css'],
})
export class TablePaginatorComponent implements OnChanges {
  @Input() dataSource: any;

  @Input() isPaginate: boolean;
  @Input() dataLength: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: any;
  @Input() pageIndex: number;

  @Output() paginatorAction = new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private skip: number = 1;

  constructor() {}

  ngOnChanges(): void {
    if (this.dataSource) {
      if (!this.isPaginate) {
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  changePage(event) {
    if (this.isPaginate) {
      if (this.dataLength > this.dataSource.length) {
        if (this.pageIndex < event.pageIndex) {
          this.skip = this.skip + this.pageSize;
          this.paginatorAction.emit(this.skip);
        }
      }
    }
  }
}
