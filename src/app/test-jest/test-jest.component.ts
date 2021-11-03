import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-jest',
  templateUrl: './test-jest.component.html',
  styleUrls: ['./test-jest.component.scss']
})
export class TestJestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(name: string, email: string, password: string, address: string) {
    if (name != '' && email != '' && password != '' && address != '') {
      return true;
    } else {
      return false;
    }
  }

}
