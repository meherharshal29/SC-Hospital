import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FooterComponent } from "../../common/footer/footer.component";

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  viewDate = new Date();
  selectedDate: Date | null = null;
  selectedSlot: string | null = null;
  dates: any[] = [];
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  categories = ['Skin Treatment', 'Hair Treatment', 'Laser Therapy', 'Consultation'];
  availableSlots = [
    { time: '10:30 AM', booked: false },
    { time: '12:00 PM', booked: false },
    { time: '02:30 PM', booked: true },
    { time: '04:30 PM', booked: false },
    { time: '06:00 PM', booked: false }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['Nagpur', Validators.required],
      branch: ['nagpur', Validators.required],
      treatmentType: ['', Validators.required]
    });
    this.renderCalendar();
  }

  renderCalendar() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    this.dates = [];
    // Previous Month padding
    for (let i = firstDay; i > 0; i--) {
      this.dates.push({ day: new Date(year, month, 1 - i).getDate(), currentMonth: false });
    }
    // Current Month
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      this.dates.push({
        day: i, month: month, year: year, currentMonth: true,
        isToday: d.toDateString() === new Date().toDateString(),
        isFull: d.getDay() === 0 || d.getTime() < new Date().setHours(0, 0, 0, 0),
        isSelected: this.selectedDate?.toDateString() === d.toDateString()
      });
    }
  }

  selectDate(date: any) {
    if (date.currentMonth && !date.isFull) {
      this.selectedDate = new Date(date.year, date.month, date.day);
      this.selectedSlot = null;
      this.renderCalendar();
    }
  }

  pickSlot(time: string) { this.selectedSlot = time; }
  prevMonth() { this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, 1); this.renderCalendar(); }
  nextMonth() { this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1); this.renderCalendar(); }

  onSubmit() {
    if (this.bookingForm.valid && this.selectedSlot) {
      const finalPayload = {
        ...this.bookingForm.value,
        appointmentDate: this.selectedDate,
        appointmentTime: this.selectedSlot
      };
      console.log("Success! Booking Payload:", finalPayload);
      alert("Appointment Confirmed! We will contact you shortly.");
    }
  }
}