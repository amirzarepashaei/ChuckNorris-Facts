import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FactService } from './services/api/service';
import { Observable } from 'rxjs';
import { ICategories } from './services/model';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationError
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  title = 'Chuck Norris Facts. Please choose a category!';
  isLoader: boolean;
  isShow = false;
  categories: Observable<ICategories[]>;
  facts: any;
  text: string;
  values: any;
  custom = [ ];

  constructor(public factService: FactService, private _router: Router, private cdr: ChangeDetectorRef) { 
    this.values = [];
  }

  toggleDisplay() {
    this.isShow = true;
  }
  
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
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
        this.values = [];
        this.isShow = true;
        let factResults = this.facts.result;
        for (let i in factResults) {
          let index = this.facts.result[i];
          this.values[i] = [index.value];
        }
      }
    );
  }

  showCategories() {
    this.categories = this.factService.getCategories();
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationError) {
      this._router.navigate(["animal"]);
    }
    this.cdr.detectChanges();
  }
  
  ngOnInit() {
    this.routerEvents();
    this.showCategories();
    this._router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });
  }
}
