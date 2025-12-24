import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  viewDate = new Date();
  selectedDate: Date | null = null;
  selectedSlot: string | null = null;
  dates: any[] = [];
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  availableSlots = [
    { time: '10:30 AM', booked: false },
    { time: '12:00 PM', booked: false },
    { time: '02:30 PM', booked: true },
    { time: '05:00 PM', booked: false },
    { time: '06:30 PM', booked: false }
  ];

  ngOnInit() { this.renderCalendar(); }

  onBranchChange(event: any) {
    console.log("Branch:", event.target.value);
    // Logic to refresh slots per branch would go here
  }

  renderCalendar() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    this.dates = [];
    for (let i = firstDay; i > 0; i--) {
      this.dates.push({ day: new Date(year, month, 1 - i).getDate(), currentMonth: false });
    }
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

  selectSlot(time: string) { this.selectedSlot = time; }
  prevMonth() { this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, 1); this.renderCalendar(); }
  nextMonth() { this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1); this.renderCalendar(); }
  finalizeBooking() { alert(`Confirmed for ${this.selectedDate?.toLocaleDateString()} at ${this.selectedSlot}`); }
}