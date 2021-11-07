import { Component, OnInit } from '@angular/core';
import { ApplesService } from '../services/apples.service';

@Component({
  selector: 'app-count-apples',
  templateUrl: './count-apples.component.html',
  styleUrls: ['./count-apples.component.css'],
})
export class CountApplesComponent implements OnInit {
  constructor(private applesService: ApplesService) {}

  countApples() {}

  ngOnInit(): void {}
}

// kaip dezeje turi suskaiciuoti, nes dazniausiai kiekis yra ivedamas?
// kas yra vartotoja grafine sasaja?
