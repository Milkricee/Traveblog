import { Routes } from '@angular/router';
import { AboutmeComponent } from './empty/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './about_me/body.component';
import { StartbildschirmComponent } from './startbildschirm/startbildschirm.component';
import { Component } from '@angular/core';
import { FoodComponent } from './food/food.component';
import { KcalComponent } from './kcal/kcal.component';
import { ColombiaComponent } from './colombia/colombia.component';


export const routes: Routes = [
    {path: 'empty', component: AboutmeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about_me', component: BodyComponent},
    {path: '', component : StartbildschirmComponent},
    {path: 'food', component:FoodComponent},
    {path: 'kcal', component:KcalComponent},
    {path: 'colombia', component:ColombiaComponent},
];

