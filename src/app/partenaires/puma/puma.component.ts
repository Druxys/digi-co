import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {filter} from 'rxjs/operators';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';

@Component({
  selector: 'app-puma',
  templateUrl: './puma.component.html',
  styleUrls: ['./puma.component.scss']
})
export class PumaComponent implements OnInit {
  faLinkedin = faLinkedin;

  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.wowService.init();
    });
  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
      });
  }
}
