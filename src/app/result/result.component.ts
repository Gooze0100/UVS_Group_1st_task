import { Component, OnInit } from '@angular/core';
import { ApplesService } from '../services/apples.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  constructor(private applesService: ApplesService) {}
  applesNumber: number = 0;
  countTime: number = 0;

  ngOnInit(): void {
    this.applesService.getData().subscribe((data) => {
      if (data) {
        this.applesNumber = data.applesNumber;
        this.countTime = data.countTime;
      }
    });
  }
}
