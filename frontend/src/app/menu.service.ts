import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private articleIndexSource = new BehaviorSubject<number>(0);
  numPosts: number = 0;

  articleIndex = this.articleIndexSource.asObservable();

  constructor() { }

  firstArticle() {
    this.articleIndexSource.next(0);
  }

  changeArticle(newIndex: number) {
    if(newIndex >= 0 && newIndex < this.numPosts) {
      this.articleIndexSource.next(newIndex);
    }
  }

  randomArticle() {
    const randomInt: number = Math.floor(Math.random() * (this.numPosts));
    this.articleIndexSource.next(randomInt);
  }


  lastArticle() {
    this.articleIndexSource.next(this.numPosts-1);
  }

  setNumPosts(numPosts: number) {
    this.numPosts = numPosts;
  }

  getNumPosts() {
    return this.numPosts;
  }


}
