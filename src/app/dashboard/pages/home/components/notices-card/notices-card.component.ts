import { Component } from '@angular/core';
import noticesdata from 'src/app/data/noticesdata';

@Component({
  selector: 'app-notices-card',
  templateUrl: './notices-card.component.html',
  styleUrls: ['./notices-card.component.scss']
})
export class NoticesCardComponent {
  notices:any[]=noticesdata;
  constructor(){

  }
}
