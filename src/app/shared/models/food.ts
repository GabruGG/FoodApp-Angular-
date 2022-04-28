export class Foods{
    id! : string;
    price! :Number;
    name! : string;
    favorite :boolean=false;
    stars: Number=0;
    tags?:string[];
    imageUrl! :string;
    cookTime! : string;
    origins! : string[];
}