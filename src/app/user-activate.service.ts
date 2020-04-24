import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserActivateService {
  activatedEmitter = new Subject<boolean>();

  constructor() {}
}
