import lists from './tickets';

export class BackendService {
	getData () {
		return Promise.resolve(lists.concat([]));
	}

	addList (title) {
		lists.push({
            id: createSlug(title),
            title: title,
			cards: []
        });

		return Promise.resolve(lists.concat([]));
	}

	addCard (card, listId) {
		card.id = generateId();
		card.createdDate = Date.now();
		card.updatedDate = Date.now();

		var list = lists.filter(x => x.id === listId);
		list[0].cards.push(card);

		return Promise.resolve(card);
	}

	getCard (cardId) {
		var cards = lists
			.map(x => x.cards)
			.reduce((p, c) => { return p.concat(c) })
			.filter(x => x.id === cardId);

		return Promise.resolve(cards[0]);
	}
}

function createSlug (title) {
	return title.split(' ').join('-').toLowerCase();
}

function generateId () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};