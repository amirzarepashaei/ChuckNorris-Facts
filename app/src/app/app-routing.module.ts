import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactComponent } from 'src/app/facts/fact.component';
import { ResolverService } from './services/resolvers';

const routes: Routes = [
  { path: 'animal', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'career', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'celebrity', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'dev', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'explicit', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'fashion', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'food', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'history', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'money', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'movie', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'music', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'political', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'religion', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'science', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'sport', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
  { path: 'travel', component: FactComponent, resolve: { facts: ResolverService }, runGuardsAndResolvers: 'always'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
