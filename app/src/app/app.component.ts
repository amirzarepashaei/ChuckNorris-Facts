import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { Observable } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FactService } from './services/api/service';
import { ICategories } from './services/model';
import { AddRemoveActions } from './app.actions';
import { IAppState } from "../store";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Chuck Norris Facts';
  instruction = 'You can make your custom list by draging the items from source list!';
  isLoader: boolean;
  isShow = false;
  total = true;
  categories: Observable<ICategories[]>;
  facts: any;
  values: any;
  custom = [ ];
  subscription: any;
  text: string;

  constructor(
    public factService: FactService, 
    private _router: Router, 
    private cdr: ChangeDetectorRef, 
    private ngRedux: NgRedux<IAppState>,
    private actions: AddRemoveActions) { 
    this.values = [];
    this.subscription = ngRedux.select<any[]>('custom')
        .subscribe(newCount => this.custom = newCount);
  }

  add() {
    this.ngRedux.dispatch(this.actions.add()); 
  }

  remove() {
    this.ngRedux.dispatch(this.actions.remove()); 
  }

  toggleDisplay() {
    this.isShow = true;
    this.total = true;
  }
  
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.add()
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
        if (this.facts.total === 0) {
          this.total = false;
          this.text = 'Oops! Nothing to show here.';
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
    this.showFacts();
    this.showCategories();
    this._router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
