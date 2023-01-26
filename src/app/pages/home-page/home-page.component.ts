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
    description: 'At Avacdro, we specialize in delivering unparalleled cloud-based web solutions utilizing our extensive expertise in the latest technologies.'
  },
  {
    img: 'http://alcinfotech.com/wp-content/uploads/2021/10/App-Development-Company-for-React.png',
    title: 'Mobile Development',
    description: 'Our team of skilled engineers at Avacdro specialize in creating iOS & Android mobile applications of any complexity, utilizing a comprehensive set of skills.'
  },
  {
    img: 'https://z-thinkers.com/wp-content/uploads/2021/09/Web-Development-1.png',
    title: 'Software Testing',
    description: 'At Avacdro, we pride ourselves on delivering exceptional software quality assurance services that are tailored to meet your specific requirements and business objectives, ensuring the highest level of excellence.'
  },
  {
    img: 'https://www.pngmart.com/files/3/Cloud-Computing-PNG-Photo.png',
    title: 'Cloud Service',
    description: 'We are committed to supporting your business throughout every stage of product development and providing our Cloud services to solve your business problems, ensuring that you achieve your goals in an efficient and effective manner.'
  },
  {
    img: 'https://z-thinkers.com/wp-content/uploads/2021/09/Web-Development-1.png',
    title: 'AI based Solutions',
    description: 'We offer cutting-edge artificial intelligence services to help businesses harness the power of AI to ' +
      'automate processes, gain insights, and improve decision making.'
  },
  {
    img: 'https://www.pngall.com/wp-content/uploads/5/Social-Media-Digital-Marketing-PNG-Images.png',
    title: 'Digital Marketing',
    description: 'We provide comprehensive digital marketing services that help businesses increase brand awareness ' +
      'and drive online conversions.'
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
