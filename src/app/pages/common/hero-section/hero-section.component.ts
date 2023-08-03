import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
