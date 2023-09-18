import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Alura Pic'

  photos = [
    {
      url: "http://10.6.130.11:8081/assets/images/ccimar_0.png",
      alt: "ccimar"
    },
    
    {
      url: "https://yt3.googleusercontent.com/axUhdWWrayKPlB7LO68ISweeWevXLAxOrXng2eefbtamO0r-jAbSX2AcFpubfhWILkOJL3r8=s900-c-k-c0x00ffffff-no-rj" ,
      alt: "marinha"
    }
  ];
}
