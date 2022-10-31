import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { heroTypeNames } from 'src/app/constants/hero.constants';

@Component({
  selector: 'app-hero-types',
  templateUrl: './hero-types.component.html',
  styleUrls: ['./hero-types.component.scss']
})
export class HeroTypesComponent implements OnInit {

    // heroTypes = heroTypes;
    heroTypeNames = heroTypeNames;

    @Input() typeId: number;
    @Output() typeIdChange = new EventEmitter<number>();
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
