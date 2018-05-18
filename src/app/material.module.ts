import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule,MatButtonModule , MatInputModule, MatProgressSpinnerModule, MatCardModule, MatTableModule, MatSortModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from "@angular/material/icon";
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
	imports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule, 
		MatProgressSpinnerModule,
		MatCardModule,
		CdkTableModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatSidenavModule,
		MatGridListModule,
		MatIconModule,
		MatDialogModule,
		MatSelectModule
	],
	exports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule, 
		MatProgressSpinnerModule,
		MatCardModule,
		CdkTableModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatSidenavModule,
		MatGridListModule,
		MatIconModule,
		MatDialogModule,
		MatSelectModule
	]
})

export class MaterialModule{

} 