import {Component, Input, OnInit} from '@angular/core';
import {AlumnusService} from "../../services/alumnus.service";
import {Alumni} from "../../models/alumni";

@Component({
  selector: 'app-alumni-card',
  templateUrl: './alumni-card.component.html',
  styleUrls: ['./alumni-card.component.css']
})
export class AlumniCardComponent implements OnInit {

  @Input() alumni: Alumni;
  constructor(private alumnusService: AlumnusService) { }

  ngOnInit(): void {
  }

  deleteAlumni(id: number) {
    this.alumnusService.deleteById(id).subscribe( () => {
      this.alumnusService.shouldRefresh.next();
    });
  }

}
