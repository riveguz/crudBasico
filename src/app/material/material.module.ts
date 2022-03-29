import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos de material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule}  from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';

const material = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [material],
})
export class MaterialModule {}
