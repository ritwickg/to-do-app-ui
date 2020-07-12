import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatDatepickerModule,
        MatSelectModule,
        MatNativeDateModule,
        MatSnackBarModule,
    ],
})
export class AngularMaterialModule {}
