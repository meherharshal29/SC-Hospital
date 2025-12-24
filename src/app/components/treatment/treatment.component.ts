import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../common/footer/footer.component";

interface Treatment {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-treatment',
  imports: [RouterModule, CommonModule, FooterComponent],
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent {
  treatments: Treatment[] = [
    {
      id: 'skin-rejuvenation',
      title: 'Skin Rejuvenation',
      category: 'Dermatology',
      description: 'Advanced medical facials and chemical peels designed to restore your natural glow and skin health.',
      icon: 'bi bi-magic',
      image: 'assets/img/skin.jpeg'
    },
    {
      id: 'hair-transplant',
      title: 'Hair Transplant',
      category: 'Trichology',
      description: 'Modern FUE techniques providing high-density, natural-looking results for hair restoration.',
      icon: 'bi bi-person-plus',
      image: 'assets/img/hair.jpg'
    },
    {
      id: 'laser-hair-removal',
      title: 'Laser Hair Removal',
      category: 'Laser',
      description: 'Painless, US-FDA approved laser technology for permanent hair reduction across all skin types.',
      icon: 'bi bi-lightning-charge',
      image: 'assets/img/leaser.jpeg'
    }
  ];
}