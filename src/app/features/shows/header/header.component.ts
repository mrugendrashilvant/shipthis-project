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
      document.getElementsByTagName("table")[0].classList.add("darkMode");
    }
    else {
      document.body.setAttribute('data-theme', "light");
      document.getElementsByTagName("table")[0].classList.remove("darkMode");
    }
  }

  protected readonly ClientRoutes = ClientRoutes;
}
