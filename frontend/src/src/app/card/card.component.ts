import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() title: string = "";
  @Input() content: string = "";
  @Input() url: string = "";

  openExternalLink(): void {
    if(this.url) {
      window.open(this.url, '_blank');
    }

  }

}
