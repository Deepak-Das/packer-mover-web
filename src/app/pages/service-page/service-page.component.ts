import { Component } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
})
export class ServicePageComponent {
  list = [
    {
      title: 'Residentail Moving',
      imgClass: 'tw-bg-residential',
      content: 'Relocating to a new home? Our residential moving service is tailored to handle all aspects of your move. From packing your belongings with care to safely transporting them to your new abode, we take care of it all. Our team is equipped to handle moves of any size, making your transition to your new home a breeze.',
    },
    {
      title: 'Commercial Moving',
      imgClass: 'tw-bg-commercial',
      content: 'When it comes to moving your business, efficiency is key. Our commercial moving service is designed to minimize downtime and disruptions to your operations. We understand the importance of a seamless move, and our experienced team will handle your office equipment, furniture, and assets with utmost care, ensuring they arrive at your new location intact.',
    },
    {
      title: 'Packing Services',
      imgClass: 'tw-bg-package',
      content: 'Packing can be one of the most time-consuming aspects of a move. Let our expert packers take this burden off your shoulders. With the use of high-quality packing materials and proven techniques, we pack your belongings securely, safeguarding them from any damages during transit.',
    },
    {
      title: 'Long-Distance Moving',
      imgClass: 'tw-bg-long',
      content: 'Moving across the country? Our long-distance moving service is designed for a seamless and efficient relocation. We have a fleet of well-maintained vehicles and experienced drivers to ensure your belongings reach your destination on time and in perfect condition.'
    },
    {
      title: 'Local Moving',
      imgClass: 'tw-bg-local',
      content: 'Even local moves can be stressful. Our local moving service takes the hassle out of your short-distance relocation. Our team will handle all the logistics, so you can focus on settling into your new neighborhood.'
    },
  ];
}
