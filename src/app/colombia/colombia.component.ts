import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-colombia',
  standalone: true,
  imports: [],
  templateUrl: './colombia.component.html',
  styleUrls: ['./colombia.component.scss']
})
export class ColombiaComponent {
  @ViewChild('buttonElement') buttonElement: ElementRef | undefined;
  hoverCount = 0; // Initialisiert den Hover-Counter mit 0

  moveButton() {
    this.hoverCount++; // Erhöht den Hover-Counter um 1
    if (this.hoverCount === 11) {
      alert('Wow, findest du die WebSite echt so schlecht?.. :(\n'+ 'Try again'); // Zeigt die Infobox an, wenn der Zähler 10 erreicht
      this.hoverCount = 0; // Setzt den Zähler zurück
    }

    if (this.buttonElement) {
      const button = this.buttonElement.nativeElement;
      const container = button.parentElement;

      const maxX = container.clientWidth - button.offsetWidth;
      const maxY = container.clientHeight - button.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }
}
