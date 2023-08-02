import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-welcome-box',
  templateUrl: './welcome-box.component.html',
  inputs:['title','content'],
  styleUrls: ['./welcome-box.component.scss'],
  // standalone:true
})
export class WelcomeBoxComponent {


  title="Welcome to Shiva Packer and Mover"


  content="At Shiva Packer and Mover, we understand that moving can be both exciting and overwhelming. Whether you are relocating your home or office, we are here to make the entire process seamless and stress-free for you. With years of experience in the industry, take pride in being one of the most trusted and reliable packer and mover companies in the region.";

}
