import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service'; // Pfad anpassen

@Component({
  selector: 'app-kcal',
  templateUrl: './kcal.component.html',
  styleUrls: ['./kcal.component.scss']
})
export class KcalComponent implements OnInit {
  foods: any[] = []; // Array zum Speichern der abgerufenen Daten

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFood().subscribe({
      next: (data) => {
        this.foods = data;
      },
      error: (error) => {
        console.error('Es gab einen Fehler beim Abrufen der Daten!', error);
      }
    });
  }
}
