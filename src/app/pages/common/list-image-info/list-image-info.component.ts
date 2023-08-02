import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-list-image-info',
  templateUrl: './list-image-info.component.html',
  styleUrls: ['./list-image-info.component.scss'],
})



export class ListImageInfoComponent {

  @Input()
  list = [
    {
      title: 'Professional Expertise: ',
      content:
        'Our team of skilled professionals is well-trained in the art of packing, moving, and logistics. We handle your belongings with the utmost care, ensuring they reach their destination safe and sound.',
    },
    {
      title: 'Comprehensive Services: ',
      content:
        'From local moves to long-distance relocations, we offer a wide range of services tailored to meet your unique needs. Our services include residential moving, commercial moving, packing services, storage solutions, and more.',
    },
    {
      title: 'Safety Assurance: ',
      content:
        'Your peace of mind is our top priority. We use high-quality packing materials and advanced techniques to secure your belongings during transit. Rest assured that your valuables are in safe hands.'
    },
    {
      title: 'Transparent Pricing: ',
      content:
        "We believe in transparency and fairness. Our pricing is competitive and upfront, with no hidden charges. You'll know exactly what to expect, making budgeting for your move hassle-free."
    },
  ];


}
