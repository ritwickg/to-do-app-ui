import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [AngularMaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
