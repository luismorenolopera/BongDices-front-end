import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  data;
  diceNumber:number;
  penalty:string = "";
  url:string = "http://dagito.pythonanywhere.com/api/penalty/detail/";
  loading:boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  getDice() {
      this.loading = true;
      setTimeout(() =>
        this.http.get(this.url).subscribe(data => {
          this.diceNumber = data['number'];
          this.penalty = data['penalty'];
          this.loading = false;
        })
      , 3000);
  }

}
