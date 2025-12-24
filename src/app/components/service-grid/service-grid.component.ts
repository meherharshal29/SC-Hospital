import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-grid.component.html',
  styleUrl: './service-grid.component.scss'
})
export class ServiceGridComponent {
  services = [
    {
      title: 'Dermatology',
      subtitle: 'SKIN PERFECTION',
      description: 'Advanced clinical treatments for acne, pigmentation, and rejuvenation.',
      icon: 'bi-stars'
    },
    {
      title: 'Trichology',
      subtitle: 'HAIR RESTORATION',
      description: 'Scientific solutions for hair thinning, scalp health, and growth.',
      // Fixed: Removed the space after "bi-"
      icon: 'bi-person-bounding-box'
    },
    {
      title: 'Anti-Aging',
      subtitle: 'YOUTH REVIVE',
      description: 'Non-surgical lifting and tightening using world-class technology.',
      icon: 'bi-shield-check'
    }
  ];
}