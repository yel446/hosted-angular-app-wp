import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent {
  remote_url: string = 'https://remote-angular-app-mf.vercel.app/micro-fe.js';
}
