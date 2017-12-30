import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent {
  user = {
    name: '',
  };
  private name: string = "";
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.subscription = activateRoute.params.subscribe(params => { this.name = params['name']; this.user.name = this.name })
  }
  backToRegistration() {
    this.router.navigate(
      ['',], )
  }

}
