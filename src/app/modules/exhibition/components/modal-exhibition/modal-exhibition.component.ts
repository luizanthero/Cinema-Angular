import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-exhibition',
  templateUrl: './modal-exhibition.component.html',
  styleUrls: ['./modal-exhibition.component.css'],
})
export class ModalExhibitionComponent implements OnInit {
  @Input() id: number;
  @Input() filmId: number;

  constructor() {}

  ngOnInit(): void {}
}
