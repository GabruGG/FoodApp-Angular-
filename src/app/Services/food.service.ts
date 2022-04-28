import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id:'1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20min',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:'2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30min',
        favorite: true,
        origins: ['Persia', 'Middle-East', 'China'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id:'3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15min',
        favorite: false,
        origins: ['Germany', 'US'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id:'4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20min',
        favorite: true,
        origins: ['Belgium', 'France'],
        stars: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:'5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50min',
        favorite: false,
        origins: ['India', 'Asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id:'6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50min',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:'7',
        name: 'Spicy Cheese Burger',
        price: 12,
        cookTime: '20-30min',
        favorite: false,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: 'assets/food-7.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id:'8',
        name: 'Vegetables Magento Pizza',
        price: 9,
        cookTime: '45-50min',
        favorite: false,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: 'assets/food-8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
    
  }
  getElementByName(naam:string){
    return this.getAll().filter(item=>{
    return item.name.toLowerCase().includes(naam.toLowerCase());
    })
  }
}
