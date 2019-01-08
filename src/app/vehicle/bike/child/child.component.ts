import { Component, OnInit, Input } from '@angular/core';
import { Ibike } from '../ibike';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('bikearray') bike :Array<Ibike>;

  constructor() { }

  ngOnInit() {
  }

}
