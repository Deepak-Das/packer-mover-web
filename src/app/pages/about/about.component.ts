import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  firstList = [
    {
      title: '',
      content:
        'We begin with a thorough consultation to understand your moving requirements and preferences. Our team will assess the scope of the move and provide you with a personalized plan.',
    },
  ];

  secondList = [
    {
      title: 'Expert Team: ',
      content:
        'Our team of experienced and trained professionals is the backbone of our success. They are dedicated to ensuring the safe and efficient handling of your belongings throughout the moving process.',
    },

    {
      title: 'Comprehensive Services: ',
      content:
        "Whether it's a local move or a long-distance relocation, a residential or commercial move, we offer a wide range of services to meet your moving requirements",
    },

    {
      title: 'Safety and Security: ',
      content:
        'We treat your belongings as if they were our own. We use high-quality packing materials and secure transport to protect your valuables during transit.',
    },

    {
      title: 'Transparent Pricing: ',
      content:
        'With us, there are no hidden costs or surprises. Our pricing is upfront and competitive, providing you with the confidence to plan your move with ease.',
    },
    {
      title: 'Customer Satisfaction: ',
      content:
        'Our commitment to customer satisfaction is unwavering. We go the extra mile to exceed your expectations and leave you with a smile at the end of your move.',
    },
  ];
  thirdList = [
    {
      title: 'Reliability: ',
      content:
        "We keep our promises and deliver on our commitments, ensuring a smooth and dependable moving experience for our clients"
    },

    {
      title: 'Integrity: ',
      content:
        "We conduct our business with honesty, transparency, and integrity, earning the trust of our customers and partners"
    },

    {
      title: 'Customer-Centric: ',
      content:
        "Your needs are at the heart of everything we do. We listen, understand, and tailor our services to match your requirements."
    },

   
  ];
}
