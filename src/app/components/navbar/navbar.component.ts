import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly session: SessionService) { }

  get hasAvtiveSession(): boolean {
    return this.session.isLoggedIn()
  }

  ngOnInit(): void {
  }

}
