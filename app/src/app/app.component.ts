import { Component, ChangeDetectionStrategy, Injectable, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FactService } from './services/api/service';
import { Observable } from 'rxjs';
import { ICategories } from './services/model';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  title = 'Chuck Norris top 5 Facts';
  isLoader: boolean;
  categories: Observable<ICategories[]>;
  facts: any;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  values: [string, string, string, string, string];
  jokeCategories: [string];

  constructor(public factService: FactService, private _router: Router) { }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.values, event.previousIndex, event.currentIndex);
  }

  routerEvents() {
    this._router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isLoader = true;
          break;
        }
        case event instanceof NavigationEnd: {
          this.isLoader = false;
          break;
        }
      }
    });
  }

  showFacts() {
    this.factService.getFacts().subscribe(
      (facts) => {
        this.facts = facts;
        this.value1 = this.facts.result[1]?.value;
        this.value2 = this.facts.result[2]?.value;
        this.value3 = this.facts.result[3]?.value;
        this.value4 = this.facts.result[4]?.value;
        this.value5 = this.facts.result[5]?.value;
        this.values = [this.value1, this.value2, this.value3, this.value4, this.value5];
        this.jokeCategories = this.facts.result[0]?.categories;
      }
    );
  }

  showCategories() {
    this.categories = this.factService.getCategories();
  }

  ngOnInit() {
    this.routerEvents();
    this.showFacts();
    this.showCategories();
  }
}
