import {Component, OnInit} from '@angular/core';
import {ShowService} from "../../service/show.service";
import {ClientRoutes} from "@core/client-routes";
import {HeaderComponent} from "@feature/shows/header/header.component";
import {ShowListComponent} from "@feature/shows/show-list/show-list.component";

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [
    HeaderComponent,
    ShowListComponent
  ],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})
export class ShowsComponent implements OnInit{
  constructor(
    private showService: ShowService,
  ) {
  }

  ngOnInit() {

  }

  getData() {
    this.showService.getData(15,2).subscribe((res) => {
      console.log(res);
    })
  }

  protected readonly ClientRoutes = ClientRoutes;
}
