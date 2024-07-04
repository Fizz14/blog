import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title: string = "Title of Download";
  content: string = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a eros quam. Duis et convallis ex, eu placerat diam. Suspendisse porttitor augue sit amet turpis accumsan ultrices. Nullam mollis sodales massa, elementum sodales nibh suscipit non. Donec volutpat interdum cursus. Duis gravida eros.";

}
