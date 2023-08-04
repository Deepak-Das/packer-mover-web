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
      imgClass: 'tw-bg-local',
      content: 'Relocating to a new home? Our residential moving service is tailored to handle all aspects of your move. From packing your belongings with care to safely transporting them to your new abode, we take care of it all. Our team is equipped to handle moves of any size, making your transition to your new home a breeze.',
    },
    {
      title: 'Commercial Moving',
      imgClass: 'tw-bg-commercial',
      content: 'When it comes to moving your business, efficiency is key. Our commercial moving service is designed to minimize downtime and disruptions to your operations. We understand the importance of a seamless move, and our experienced team will handle your office equipment, furniture, and assets with utmost care, ensuring they arrive at your new location intact.',
    },
    {
      title: '',
      imgClass: '',
      content: ''
    },
    {
      title: '',
      imgClass: '',
      content: ''
    },
    {
      title: '',
      imgClass: '',
      content: ''
    },
  ];
}
