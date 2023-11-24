import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { WorksComponent } from './works/works.component';

export const routes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "service", component: ServiceComponent},
    {path: "works", component: WorksComponent},
];
