import {inject} from 'aurelia-framework';
import {BackendService} from './services/backend-service';

@inject(BackendService)
export class Detail {

  constructor(backendService) {
    this.backendService = backendService;

    this.title = '';
    this.description = '';
    this.createdDate = null;
    this.updatedDate = null;
    this.priority = null;
  }

  activate(routeConfig, params) {
    this.backendService.getCard(routeConfig.id)
      .then((card) => {
        this.title = card.title;
        this.description = card.description;
        this.createdDate = card.createdDate;
        this.updatedDate = card.updatedDate;
        this.priority = card.priority;
      });
  }

}
