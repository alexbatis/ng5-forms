import { Routes } from '@angular/router';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const ROUTES: Routes = [
    { path: 'model-driven', component: ModelDrivenFormsComponent },
    { path: 'reactive', component: ReactiveFormComponent },
    { path: 'template-driven', component: TemplateDrivenFormComponent },
    { path: '**', redirectTo: 'model-driven' }
];
