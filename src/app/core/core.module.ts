import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [CoreComponent, MenuComponent],
    imports: [CommonModule, CoreRoutingModule, SharedModule],
    exports: [CoreComponent],
})
export class CoreModule {}
