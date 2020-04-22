import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactDetailComponent } from 'src/app/facts/fact-list.component';
import { ResolverService } from './services/resolvers';

const routes: Routes = [
  { path: 'animal', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'career', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'celebrity', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'dev', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'explicit', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'fashion', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'food', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'history', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'money', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'movie', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'music', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'political', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'religion', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'science', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'sport', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'travel', component: FactDetailComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
