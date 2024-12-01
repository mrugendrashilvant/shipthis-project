import {Component} from '@angular/core';
import {ClientRoutes} from "@core/client-routes";
import {HeaderComponent} from "@feature/shows/header/header.component";
import {ShowListComponent} from "@feature/shows/show-list/show-list.component";
import {FilterComponent} from "@feature/shows/filter/filter.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [
    HeaderComponent,
    ShowListComponent,
    FilterComponent,
    JsonPipe
  ],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})
export class ShowsComponent {
  filter:string[]=[];
  searchTermValue!: string;

  setFilterItems(items: string[]) {
    this.filter = [...items];
  }

  setSearchTerm(searchTerm: string) {
    this.searchTermValue = searchTerm;
  }

  protected readonly ClientRoutes = ClientRoutes;
}
