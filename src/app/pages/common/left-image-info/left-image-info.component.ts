import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-left-image-info',
  templateUrl: './left-image-info.component.html',
  styleUrls: ['./left-image-info.component.scss']
})
export class LeftImageInfoComponent {

  
  @Input()
  title="Our Moving Process"
 

  @Input()
  list = [
    {
      title: 'Free Consultation: ',
      content:
        'We begin with a thorough consultation to understand your moving requirements and preferences. Our team will assess the scope of the move and provide you with a personalized plan.'
    },
    {
      title: 'Expert Packing: ',
      content:
        'Our trained packewill carefully pack your belongings using industry-leading materials to safeguard them from any damage during transportation.'
    },
    {
      title: 'Safe Transportation: ',
      content:
        'We have a fleet of well-maintained vehicles equipped to handle all types of moves. Our experienced drivers ensure timely and secure transportation.'
    },
    {
      title: 'Unpacking and Setup: ',
      content:
        'Upon arrival, we will unpack and set up your belongings in your new location, so you can quickly settle into your new space.'
    },
    {
      title: 'Customer Satisfaction: ',
      content:
        'Your satisfaction is our ultimate goal. We strive to exceed your expectations at every step of the process.'
    },
  ];

}
