import {inject} from 'aurelia-framework';
import dragula from 'dragula';

@inject(Element)
export class DraggableCustomAttribute {
    constructor(element) {
        this.element = element;
        this.drake = drake;

        this.drake.containers.push(element);
    }

    valueChanged(newValue, oldValue) {
    }
}

var drake = dragula({
    revertOnSpill: true,
});