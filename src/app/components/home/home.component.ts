import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ServiceGridComponent } from "../service-grid/service-grid.component";
import { DoctorProfileComponent } from "../doctor-profile/doctor-profile.component";
import { CalendarComponent } from '../calendar/calendar.component';
import { FooterComponent } from "../../common/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServiceGridComponent, DoctorProfileComponent, CalendarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
