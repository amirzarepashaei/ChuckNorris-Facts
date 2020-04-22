import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  NavigationEnd
} from "@angular/router";
import { FactService } from "./api/service";
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class ResolverService implements Resolve<any> {

  constructor(private factService: FactService, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      console.log('event url is ', event.url.slice(1, 10));
      this.factService.getFacts();
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.factService.getFacts();
  }
}
