import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [
    RouterLink, 
    CommonModule,
    MatButtonModule,
    MatMenuModule,
  ],
  animations: [
    trigger('menuAnimation', [
        state('hidden', style({
            transform: 'translateY(-100%)' // Menü ist versteckt
        })),
        state('visible', style({
            transform: 'translateY(0)' // Menü ist sichtbar
        })),
        transition('hidden <=> visible', animate('300ms ease-in-out')) // Geschwindigkeit der Animation
    ])
],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'] 
})
export class DropDownComponent {
  // showDropdown = false;
  menuState: string='visible';

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (window.scrollY > 0) { // Überprüft, ob die Seite nach unten gescrollt wurde
        this.menuState = event.clientY < window.innerHeight / 5 ? 'visible' : 'hidden';
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
      if (window.scrollY === 0) { // Versteckt das Menü, wenn ganz oben gescrollt wird
          this.menuState = 'visible';
      }
  }
}
 