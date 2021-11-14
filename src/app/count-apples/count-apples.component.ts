import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplesService } from '../services/apples.service';

@Component({
  selector: 'app-count-apples',
  templateUrl: './count-apples.component.html',
  styleUrls: ['./count-apples.component.css'],
})
export class CountApplesComponent implements OnInit {
  constructor(private applesService: ApplesService) {}

  ngOnInit(): void {}

  countAllApples(form: NgForm) {
    if (
      typeof form.value.countApples === 'number' &&
      typeof form.value.countOneApple === 'number'
    ) {
      if (form.value.countApples !== '' && form.value.countOneApple !== '') {
        if (form.value.countApples > 0 && form.value.countOneApple > 0) {
          const applesNumber = Math.round(
            form.value.countApples / form.value.countOneApple
          );
          this.applesService.sendData(applesNumber, form.value.countOneApple);
          form.reset();
        }
      }
    }
  }
}
