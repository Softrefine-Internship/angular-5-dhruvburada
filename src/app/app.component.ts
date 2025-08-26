import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { filter, map, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().pipe(
      map((data: number[]) => data.map(value => value * 2).filter(val => val % 2 == 0).reduce((acc, val) => acc + val, 0)),
    ).subscribe({
      next: (val) => console.log(`Sum of Even doubled Numbers - ${val}`),
      complete: () => console.log("Completed"),
      error: (err) => console.log(err)
    })
  }
}
