import { Component, OnInit } from '@angular/core';
import {AlumnusService} from "../../services/alumnus.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-alumni-form',
  templateUrl: './alumni-form.component.html',
  styleUrls: ['./alumni-form.component.css']
})
export class AlumniFormComponent implements OnInit {

  alumniId: number;
  isShowSuccess = false;
  message: string;

  alumniForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullname: new FormControl(''),
    jobtitle: new FormControl(''),
    notes: new FormControl(''),
  })

  constructor(private alumnusService: AlumnusService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.alumniId = params.id;
      this.alumnusService.getById(this.alumniId).subscribe( result => {
        this.alumniForm.setValue(result);
      });
    });
  }

  onSubmit() {
    if (this.alumniId) {
      this.alumnusService.updateAlumni(this.alumniForm.value).subscribe( result => {
        this.isShowSuccess = true;
        this.message = 'Đã cập nhật thông tin cựu học viên!';
      });
    } else {
      this.alumnusService.createAlumni(this.alumniForm.value).subscribe( result => {
        this.isShowSuccess = true;
        this.message = 'Đã thêm cựu học viên!';
        this.alumnusService.shouldRefresh.next('Gửi thông điệp gì đó!');
      });
    }

  }

}
