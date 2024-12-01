import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent} from "@angular/material/dialog";
import {MovieResponse} from "@core/response.interface";
import {CommonModule} from "@angular/common";
import {OverlayContainer} from "@angular/cdk/overlay";
import {CommonService} from "../../../service/common.service";

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
export class ViewShowComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MovieResponse,
    private overlayContainer: OverlayContainer,
    private commonService: CommonService
  ) {
  }

  ngOnInit() {

    this.commonService.getCurrentViewMode().subscribe((mode) => {
      if(mode === 'light') {
        this.overlayContainer.getContainerElement().classList.remove('darkMode');
      }
      else {
        this.overlayContainer.getContainerElement().classList.add('darkMode');
      }
    })
  }

}
