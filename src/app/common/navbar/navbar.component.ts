import { Component, HostListener, Inject, PLATFORM_ID, Renderer2, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  isScrolled = false;
  isMenuOpen = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Luxury Letter Animation for "Sparsh Clinic"
      gsap.from('.brand-char', {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (isPlatformBrowser(this.platformId)) {
      if (this.isMenuOpen) {
        this.renderer.addClass(document.body, 'no-scroll');
        // Animate mobile links on open
        gsap.fromTo('.mobile-item',
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.2 }
        );
      } else {
        this.renderer.removeClass(document.body, 'no-scroll');
      }
    }
  }
}