import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	isAuthPath = false;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.subscribeToRouterEvents();
	}

	subscribeToRouterEvents(): Subscription {
		return this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd)
			)
			.subscribe((event: RouterEvent) => {

				if (!event.url) {
					return;
				}

				if (event.url.includes('/auth')) {
					this.isAuthPath = true;
				} else {
					this.isAuthPath = false;
				}
			});
	}
}
