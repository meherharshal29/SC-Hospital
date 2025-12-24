import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { TreatmentComponent } from './components/treatment/treatment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'appointment-booking', component: BookingFormComponent },
    { path: 'treatments', component: TreatmentComponent },
];
