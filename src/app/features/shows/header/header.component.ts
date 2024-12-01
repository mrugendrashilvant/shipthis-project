import {Component, inject, OnInit} from '@angular/core';
import {ClientRoutes} from "@core/client-routes";
import {FormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "../../../service/auth.service";
import {CommonService} from "../../../service/common.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, MatTooltipModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  authService = inject(AuthService);
  commonService = inject(CommonService);
  ngOnInit() {
    this.onChange(false);
    this.commonService.getCurrentViewMode().subscribe((mode) => {
      if(mode === 'light') {
        document.body.setAttribute('data-theme', "light");
        document.getElementsByTagName("table")[0].classList.remove("darkMode");
      }
      else {
        document.body.setAttribute('data-theme', "dark");
        document.getElementsByTagName("table")[0].classList.add("darkMode");
      }
    })
  }

  onChange(ev:any) {
    if(ev?.target?.checked) {
      this.commonService.setViewMode('dark');
    }
    else {
      this.commonService.setViewMode('light');
    }
  }

  logout() {
    this.authService.logout();
  }

  protected readonly ClientRoutes = ClientRoutes;
}
