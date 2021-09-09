import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslationComponent} from "./translation/translation.component";

const routes: Routes = [
  {path: "", component: TranslationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
