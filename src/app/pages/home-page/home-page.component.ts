import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';
import {VERSION} from "@angular/cdk";

export interface Service {
  img: string;
  title: string;
  description?: string;
}
const SERVICE: Service[] = [
  {
    img: 'https://z-thinkers.com/wp-content/uploads/2021/09/Web-Development-1.png',
    title: 'Web Development',
    description: 'We deliver perfect cloud-based web solutions exploiting our significant expertise on latest technologies'
  },
  {
    img: 'http://alcinfotech.com/wp-content/uploads/2021/10/App-Development-Company-for-React.png',
    title: 'Mobile Development',
    description: 'Our engineers with a set of comprehensive skills develop iOS & Android mobile applications of any complexity'
  },
  {
    img: 'https://z-thinkers.com/wp-content/uploads/2021/09/Web-Development-1.png',
    title: 'Software Testing',
    description: 'We offer you comprehensive software quality assurance services that meet your requirements and business objectives.'
  },
  {
    img: 'https://www.pngmart.com/files/3/Cloud-Computing-PNG-Photo.png',
    title: 'Cloud Service',
    description: 'We support your business at every stage of product development and solve your business problems with our Cloud services.'
  },
  {
    img: 'https://z-thinkers.com/wp-content/uploads/2021/09/Web-Development-1.png',
    title: 'Artificial Intelligence based Solutions',
    description: 'We deliver perfect cloud-based web solutions exploiting our significant expertise on latest technologies'
  },
  {
    img: 'https://www.pngall.com/wp-content/uploads/5/Social-Media-Digital-Marketing-PNG-Images.png',
    title: 'Digital Marketing',
    description: 'We deliver perfect cloud-based web solutions exploiting our significant expertise on latest technologies'
  },


];
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 500),
    tap(() => console.log('sas'))
  );

  // not Cross browsing (works on chrome - firefox)
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

  dataSource = SERVICE;
}
