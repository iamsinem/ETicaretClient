import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ListsComponent } from './lists/lists.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { FileUploadModule } from "../../../services/common/file-upload/file-upload.module";
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { ComponentsModule } from '../../layout/components/components.module';


@NgModule({
  declarations: [
  ProductsComponent,
  CreateComponent,
  ListsComponent,
  DeleteDirective,
  
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: "", component: ProductsComponent }
    ]),
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FileUploadModule,MatSelectModule,FormsModule,ComponentsModule
],
exports:[
]
})
export class ProductsModule { }
