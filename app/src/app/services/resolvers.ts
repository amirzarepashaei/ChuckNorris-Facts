import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from "@angular/router";
import { FactService } from "./api/service";
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class ResolverService implements Resolve<any> {

  constructor(private factService: FactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.factService.getFacts();
  }
}
