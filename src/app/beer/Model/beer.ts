import { Ingredients } from "./Ingredients";

export interface Beer {
    id: string;
    name: string;
    image_url: string;
    description:string;
    ingredients:any;
  }