import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  inputs:["step","title","content","iconImg"],
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent {


  iconImg="tw-bg-icon-requirement"
  title="Submit Your Requirement"
  step="Step 1"
  content="Provide the details of the goods and the probable time of shifting those goods the probable time of shifting those goods of Packer and Mover"

}
