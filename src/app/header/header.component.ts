import { Component } from '@angular/core';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'Star Wars API, Coding Challenge (Angular)';
  author = 'Glenn Heckman Jr.';
}
