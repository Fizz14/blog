import { Injectable } from '@angular/core';
import { articleData } from './articleData';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleList: articleData[] = {
    {
      id:0;
      category:"Life & Living";
      title:"Human Recipe";
      content:"It's good to have good things. How do we have good humans? What is the recipe?";
    }
    {
      id:1;
      category:"Objectivity";
      title:"USIL";
      content:"I want to create a universal structural illustration language, useful for objectively communicating the layout of anything.";
    }
    {
      id:2;
      category:"The Future";
      title:"AI takeover";
      content:"I am not the only human afraid of the possibility of an AI takeover.";
    }

  }

  constructor() { }
}
