import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  cards = [
    {img: '/assets/image/techIcons/html5.png'},
    {img: '/assets/image/techIcons/css3.png'},
    {img: '/assets/image/techIcons/js.png'},
    {img: '/assets/image/techIcons/angular.svg'},
    {img: '/assets/image/techIcons/hibernate.png'},
    {img: '/assets/image/techIcons/blockchain.png'},
    {img: '/assets/image/techIcons/nodejs.png'},
    {img: '/assets/image/techIcons/flutter.png'},
    {img: '/assets/image/techIcons/laravel.png'},
    {img: '/assets/image/techIcons/csharp.png'},
    {img: '/assets/image/techIcons/aws.png'},
    {img: '/assets/image/techIcons/mysql.png'},
    {img: '/assets/image/techIcons/mongodb.png'},
    {img: '/assets/image/techIcons/moby.png'},
    {img: '/assets/image/techIcons/vue.png'},
    {img: '/assets/image/techIcons/python.png'},
    {img: '/assets/image/techIcons/php.png'},
    {img: '/assets/image/techIcons/java.png'},
    {img: '/assets/image/techIcons/drupal.png'},
    {img: '/assets/image/techIcons/firebase.png'},
    {img: '/assets/image/techIcons/bootstrap.png'},
    {img: '/assets/image/techIcons/wordpress.png'},
    {img: '/assets/image/techIcons/spring.png'},
    {img: '/assets/image/techIcons/oracle.png'},
    // --- for smoothness
    {img: '/assets/image/techIcons/html5.png'},
    {img: '/assets/image/techIcons/css3.png'},
    {img: '/assets/image/techIcons/js.png'},
    {img: '/assets/image/techIcons/angular.svg'},
    {img: '/assets/image/techIcons/hibernate.png'},
    {img: '/assets/image/techIcons/blockchain.png'},
    {img: '/assets/image/techIcons/nodejs.png'},
    {img: '/assets/image/techIcons/flutter.png'},
    {img: '/assets/image/techIcons/laravel.png'},
    {img: '/assets/image/techIcons/csharp.png'},
  ];
  constructor() {}

  ngOnInit(): void {}
}
