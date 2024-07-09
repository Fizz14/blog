import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navIndexSource = new BehaviorSubject<number>(0);

  navIndex = this.navIndexSource.asObservable();

  constructor() { }

  changeView(newView: number) {
    this.navIndexSource.next(newView);
  }

}
