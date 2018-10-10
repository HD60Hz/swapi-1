import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CharactersRoutingModule } from './characters-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CharacterResolve } from './character.resolve';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CharactersRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
    HttpClientModule
  ],
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  providers:[
    CharacterResolve
  ]
})
export class CharactersModule { }
