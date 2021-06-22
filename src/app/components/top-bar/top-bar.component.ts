import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() title: string = '';
  @ViewChild('appTitle', {static: true}) appTitleRef!: ElementRef;

  constructor() {

  }

  ngOnInit(): void {
    this.appTitleRef.nativeElement.innerText = this.title;
  }

}
