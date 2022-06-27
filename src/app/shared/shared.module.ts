import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { HeaderConnectedComponent } from './components/header/header-connected/header-connected.component';
import { HeaderPublicComponent } from './components/header/header-public/header-public.component';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule as SharedModuleNgPrime } from "primeng/api";
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderConnectedComponent,
    HeaderPublicComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    SharedModuleNgPrime,
    TieredMenuModule,
    TooltipModule,
    DropdownModule,
    FormsModule,
    SidebarModule
 ],
  exports: [
    CommonModule,
    TranslateModule,
    FooterComponent,
    ButtonModule,
    HeaderComponent,
    HeaderConnectedComponent,
    HeaderPublicComponent
  ]
})
export class SharedModule { }
