import { Component } from '@angular/core';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Stelle sicher, dass NgbModal importiert wird
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
   'assets/imgs/nature/2.JPG', 
   'assets/imgs/nature/3.JPG',
    'assets/imgs/nature/4.JPG',  
    'assets/imgs/nature/5.JPG',
    'assets/imgs/nature/6.JPG',
    'assets/imgs/nature/7.JPG',
    'assets/imgs/nature/8.JPG',
    'assets/imgs/nature/9.JPG',
    'assets/imgs/nature/10.JPG',
    'assets/imgs/nature/11.JPG',
  ];

  constructor(private modalService: NgbModal) {} // NgbModal im Konstruktor injizieren

  openCarouselModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'xl' });
  }
}
