import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; // NgbModalModule importieren
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutmeComponent } from './empty/aboutme.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ContactComponent } from "./contact/contact.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        AboutmeComponent,
        RouterLink,
        NgbModalModule, // Füge NgbModalModule zu den imports hinzu
        DropDownComponent,
        ContactComponent,
        HttpClientModule,
        
    ]

})
export class AppComponent {
  title = 'Travelblog';
}
