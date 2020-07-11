import { Component, OnInit } from '@angular/core';
import {AlumnusService} from "../../services/alumnus.service";
import {Alumni} from "../../models/alumni";

@Component({
  selector: 'app-alumnus-list',
  templateUrl: './alumnus-list.component.html',
  styleUrls: ['./alumnus-list.component.css']
})
export class AlumnusListComponent implements OnInit {

  constructor(private alumnusService: AlumnusService) { }

  alumnus: Alumni[];

  ngOnInit(): void {
    this.getAll();

    this.alumnusService.shouldRefresh.subscribe(result => { // << Gửi thông điệp gì đó!
      this.getAll();
      console.log(result);
    });
  }

  getAll() {
    this.alumnusService.getAll().subscribe( (result) => {
      this.alumnus = result;
    }, error => {
      // error handling
    } ); // arrow function

  }

}
