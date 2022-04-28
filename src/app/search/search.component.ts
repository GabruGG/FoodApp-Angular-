import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem:string='';

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      if(params['searchItems'])
      this.searchItem=params['searchItems']
    })
  }
  search(){
    this.router.navigateByUrl('search/'+this.searchItem)
  }

}
