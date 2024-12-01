import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent} from "@angular/material/dialog";
import {MovieResponse} from "@core/response.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-view-show',
  standalone: true,
  imports: [
    MatDialogContent,
    CommonModule
  ],
  templateUrl: './view-show.component.html',
  styleUrl: './view-show.component.scss'
})
export class ViewShowComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MovieResponse,
  ) {
  }
}
