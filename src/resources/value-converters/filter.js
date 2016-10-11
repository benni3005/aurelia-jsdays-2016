export class FilterValueConverter {
    toView(array, config) {
        return array.slice().filter(x => x[config.propertyName] == config.value);
    }
}

