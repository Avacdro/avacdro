import {Component, OnInit} from '@angular/core';

export interface techIcon {
  img: String;
}

const TECHICON: techIcon[] = [
  {img: 'https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png',},
  {img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',},
  {img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png',},
  {img: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',},
  {img: 'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png',},
  {img: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',},
  {img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',},
  {img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png',},
  {img: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',},
  {img: 'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png',},
  {img: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',},
  {img: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',},
  {img: 'https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png',},
  {img: 'https://angular.io/assets/images/logos/angular/angular.png',},
]

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  cards = [
    {img: 'https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png',},
    {img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',},
    {img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png',},
    {img: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',},
    {img: 'https://cdn.freebiesupply.com/logos/large/2x/hibernate-logo-png-transparent.png',},
    {img: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp',},
    {img: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png',},
    {img: 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',},
    {img: 'https://www.zencos.com/wp-content/uploads/2021/11/aws-logo.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',},
    {img: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',},
    {img: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png',},
    {img: 'https://avatars.githubusercontent.com/u/67109815?s=280&v=4',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/1200px-Wordpress_Blue_logo.png',},
    {img: 'https://seeklogo.com/images/S/spring-logo-9A2BC78AAF-seeklogo.com.png',},
    {img: 'https://m.media-amazon.com/images/I/41QodfboFdL.png',},

  //  ----------------------
    {img: 'https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png',},
    {img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',},
    {img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png',},
    {img: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',},
    {img: 'https://cdn.freebiesupply.com/logos/large/2x/hibernate-logo-png-transparent.png',},
    {img: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp',},
    {img: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png',},
    {img: 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',},
    {img: 'https://www.zencos.com/wp-content/uploads/2021/11/aws-logo.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',},
    {img: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',},
    {img: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png',},
    {img: 'https://avatars.githubusercontent.com/u/67109815?s=280&v=4',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/1200px-Wordpress_Blue_logo.png',},
    {img: 'https://seeklogo.com/images/S/spring-logo-9A2BC78AAF-seeklogo.com.png',},
    {img: 'https://m.media-amazon.com/images/I/41QodfboFdL.png',},


  ];
  constructor() {
  }

  ngOnInit(): void {
  }

  iconData = TECHICON;

}
