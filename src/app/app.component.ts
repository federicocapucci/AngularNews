import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsList : any[] = [];
  isLoading :boolean = false;


  constructor(private _newsService: NewsService){    
  }

  // 4 - Data is passed as parameters from the child component
  searchNews(params : any){
    
    this.isLoading = true;

    setTimeout(() =>{

    console.log('father component')
    console.log(params)    

    this._newsService.getNews(params).subscribe({      
      next: (data) =>{ 
        this.isLoading = false; 
        this.newsList = data.articles
        console.log(this.newsList)
        
      },        
      error: (e) => console.log(e),
      complete: () => console.log('complete')
      })
    } ,500)

  }
  
  
}
