import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../Services/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[];

  constructor(private fs:FoodService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(param=>{
      if(param['searchItems']){
      this.foods=this.fs.getElementByName(param['searchItems']);
      console.log(this.foods);
      }
      else
      this.foods=this.fs.getAll();
    }
    )
  }
}
