import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  modalOne:boolean=false
  modalTwo:boolean=false
  modalThree:boolean=false
  modalFour:boolean=false
  projects = [
    {
      link:'https://mohhamedhassan.github.io/fakebook/',
      img:'assets/facebook.png',
      h4:'FACEBOOK CLONE',
      p:'Facebook clone by Angular & (NodeJS By another developer)',
    },
    {
      link:'https://mohhamedhassan.github.io/Restaurant/home',
      img:'assets/pizzahutLogo-en.png',
      h4:'PIZZA HUT CLONE',
      p:'PIZZA HUT clone by Angular & (NodeJS By another developer)',
    },
    {
      link:'https://mohhamedhassan.github.io/cv-builder/home',
      img:'assets/logo.png',
      h4:'CV Builder',
      p:'CV Builder by Angular ',
    },
    {
      link:'https://mohhamedhassan.github.io/TheGiftery/home',
      img:'assets/HEBA-Giftery-New-Website-Layout-2022_pages-to-jpg-0002-272x75.jpg',
      h4:'The Giftery',
      p:'E_Commerce by Angular & Firebase ',
    },
    {
      link:'https://mohhamedhassan.github.io/MoviesApi/home',
      img:'assets/cinema-logo-with-popcorn_23-2147494040.avif',
      h4:'MoviesApi',
      p:'MoviesApi by Angular',
    },
    {
      link:'https://mohhamedhassan.github.io/foodeology/',
      img:'assets/Logo_Blanco+-+copia.png',
      h4:'Foodeology',
      p:'Restaurant Design by HTML CSS JS',
    },
    {
      link:'https://mohhamedhassan.github.io/StickyNotes/',
      img:'assets/logo (1).png',
      h4:'StickyNotes',
      p:'StickyNotes by HTML CSS JS',
    },
    {
      link:'https://mohhamedhassan.github.io/taskTwo/',
      img:'assets/logo (2).png',
      h4:'Agencynix',
      p:'Agencynix by HTML CSS',
    },
    {
      link:'https://mohhamedhassan.github.io/TemplateOne/',
      img:'assets/logo (3).png',
      h4:'The Evenet',
      p:'HTML CSS',
    },
    {
      link:'https://mohhamedhassan.github.io/TemplateTwo/',
      img:'assets/pic2.png',
      h4:'CODER.BITS',
      p:'HTML CSS',
    },
    {
      link:'https://mohhamedhassan.github.io/task/',
      img:'assets/download.png',
      h4:'Technical Office',
      p:'HTML CSS',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
