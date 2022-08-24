import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  
  @Input() newsList : any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
function input() {
  throw new Error('Function not implemented.');
}

