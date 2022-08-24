import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  // 1 - Create Outpput to export to parent component
  @Output() paramsSelected = new EventEmitter<any>(); 

  categoriesList: any[] = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Business'},
    {value: 'entertainment', label: 'Entertainment'},
    {value: 'health', label: 'Health'},    
    {value: 'technology', label: 'Technology'},
    {value: 'science', label: 'Science'},
    {value: 'sports', label: 'Sports'},
  ];
  countriesList: any[] = [
    {value: 'au', label: 'Australia'},
    {value: 'ar', label: 'Argentina'},
    {value: 'br', label: 'Brazil'},
    {value: 'cn', label: 'China'},
    {value: 'fr', label: 'France'},
    {value: 'es', label: 'Spain'},
    {value: 'it', label: 'Italy'},
    {value: 'us', label: 'United States'},
    {value: 'mx', label: 'Mexico'},
    {value: 'gb', label: 'United Kingdom'},
    {value: 'ru', label: 'Russia'},
    {value: 'jp', label: 'Japan'},
    {value: 'nz', label: 'New Zealand'},
  ];
  selectedCountry : string = 'Pick Country...';
  selectedCategory: string = 'And Category...';
  



  constructor() { }

  ngOnInit(): void {
  }

  validate(){
    return (this.selectedCountry =='Pick Country...' ||
    this.selectedCategory == 'And Category...'
    )
  }

  sendParams(){
    const PARAMS = {
      country: this.selectedCountry,
      category: this.selectedCategory
      
    }
    // 2 - Use is to send data to parent
    this.paramsSelected.emit(PARAMS);    
  }

}
