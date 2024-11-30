import {Component, OnInit} from '@angular/core';
import {ClientRoutes} from "@core/client-routes";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  ngOnInit() {
    this.onChange(false)
  }

  onChange(ev:any) {
    if(ev?.target?.checked) {
      document.body.setAttribute('data-theme', "dark");
    }
    else {
      document.body.setAttribute('data-theme', "light");
    }
  }

  protected readonly ClientRoutes = ClientRoutes;
}
