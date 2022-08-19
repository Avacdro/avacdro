import {Component, OnInit} from '@angular/core';

export interface techIcon {
  img: String;
}

const TECHICON: techIcon[] = [
  {
    img: 'https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png',
  },
  {
    img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png',
  },
  {
    img: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',
  },
  {
    img: 'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png',
  },
  {
    img: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  }
  ,
  {
    img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png',
  },
  {
    img: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',
  },
  {
    img: 'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png',
  },
  {
    img: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  }
]

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  iconData = TECHICON;

}
