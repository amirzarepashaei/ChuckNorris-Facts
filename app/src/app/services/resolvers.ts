import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { FactService } from "./api/service";

@Injectable({
  providedIn: "root"
})

export class ResolverService implements Resolve<any> {

  constructor(private factService: FactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.factService.getFacts();
  }
}
