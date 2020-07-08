import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cine-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  message: string;

  constructor() {}

  ngOnInit(): void {
    const year = new Date().getFullYear();
    const name = 'Luiz Anthero Gama';

    this.message = `Developing by ${name}, ${year}`;
  }
}
