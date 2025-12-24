import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // Import these
import { gsap } from 'gsap';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroContainer') heroContainer!: ElementRef;

  // 1. Inject PLATFORM_ID
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

      tl.from('.left-panel', { xPercent: -100, opacity: 0 })
        .from('.right-panel', { xPercent: 100, opacity: 0 }, "-=1.2")
        .from('.content-card', { y: 100, opacity: 0 }, "-=0.8")
        .from('.content-card h1, .content-card p', {
          y: 20,
          opacity: 0,
          stagger: 0.2
        }, "-=0.5");
    }
  }
}