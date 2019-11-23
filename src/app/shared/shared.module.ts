import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './layout/loading.component';
import { DataService } from '../core/services';
import { SeoService } from '../core/services/seo.service';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        CollapseModule,
        RouterModule,
        HttpClientModule
    ],
    declarations: [
        LoadingComponent,
        HeaderComponent,
        SidebarComponent
    ],
    exports: [
        LoadingComponent,
        HeaderComponent,
        SidebarComponent
    ],
    providers: [
        DataService,
        SeoService
    ]
})
export class SharedModule { }