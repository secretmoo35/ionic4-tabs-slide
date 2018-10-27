import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tabs: Array<any> = [{
    name: 'Segment 1'
  }, {
    name: 'Segment 2'
  }, {
    name: 'Segment 3'
  }, {
    name: 'Segment 4'
  }, {
    name: 'Segment 5'
  }, {
    name: 'Segment 6'
  }];
  constructor() { }

  ngOnInit() {
  }

}
