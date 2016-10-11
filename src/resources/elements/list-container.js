import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {BackendService} from 'services/backend-service';

@inject(BackendService)
export class ListContainer {
    @bindable id;
    @bindable title;
    @bindable cards;

    draftCard = null;

    constructor (backendService) {
        this.backendService = backendService;
    }

    addCard () {
        this.backendService.addCard({
            title: this.draftCard,
            status: this.id,
            description: ''
        }, this.id)
            .then((ticket) => {
                this.draftCard = null;
            });
    }
}
