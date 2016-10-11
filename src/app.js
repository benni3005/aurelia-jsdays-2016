import {inject} from "aurelia-framework";
import {BackendService} from "./services/backend-service";

@inject (BackendService)
export class App {
  title = '';
  description = '';
  lists = [];
  newList = null;

  constructor(backendService) {
    this.backendService = backendService;
  }

  activate() {
    this.backendService.getData()
      .then((lists) => {
        this.lists = lists;
      });
  }

  addList() {
    this.backendService.addList(this.newList)
      .then((lists) => {
        this.lists = lists;
        this.newList = null;
      });
  }
}
