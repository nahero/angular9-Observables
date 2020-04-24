import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserActivateService } from "./user-activate.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userIsActivated = false;
  private userActivatedSub: Subscription;

  constructor(private userActivatedService: UserActivateService) {}

  ngOnInit() {
    this.userActivatedSub = this.userActivatedService.activatedEmitter.subscribe(
      (didActivate) => {
        this.userIsActivated = didActivate;
        console.log(this.userIsActivated);
      }
    );
  }

  ngOnDestroy() {
    this.userActivatedSub.unsubscribe();
  }
}
