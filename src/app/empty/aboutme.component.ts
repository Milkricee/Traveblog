import { Component, HostListener, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule, 
    CommonModule,

    ],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'] 
})
export class AboutmeComponent {
  showFiller = false;

  @ViewChild('drawer') drawer!: MatDrawer; // Verwende 'ViewChild', um auf die Sidenav zu verweisen

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const screenWidth = window.innerWidth;
    const boundary = screenWidth / 6; // Linkes sechstel des Bildschirms

    if (event.clientX < boundary) {
      this.drawer.open(); // Öffnet die Sidenav
    } else {
      this.drawer.close(); // Schließt die Sidenav
    }
  }
}
