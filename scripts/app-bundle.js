define('app',["exports", "aurelia-framework", "./services/backend-service"], function (exports, _aureliaFramework, _backendService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_backendService.BackendService), _dec(_class = function () {
    function App(backendService) {
      _classCallCheck(this, App);

      this.title = '';
      this.description = '';
      this.lists = [];
      this.newList = null;

      this.backendService = backendService;
    }

    App.prototype.activate = function activate() {
      var _this = this;

      this.backendService.getData().then(function (lists) {
        _this.lists = lists;
      });
    };

    App.prototype.addList = function addList() {
      var _this2 = this;

      this.backendService.addList(this.newList).then(function (lists) {
        _this2.lists = lists;
        _this2.newList = null;
      });
    };

    return App;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot('index');
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('services/backend-service',['exports', './tickets'], function (exports, _tickets) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BackendService = undefined;

	var _tickets2 = _interopRequireDefault(_tickets);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var BackendService = exports.BackendService = function () {
		function BackendService() {
			_classCallCheck(this, BackendService);
		}

		BackendService.prototype.getData = function getData() {
			return Promise.resolve(_tickets2.default.concat([]));
		};

		BackendService.prototype.addList = function addList(title) {
			_tickets2.default.push({
				id: createSlug(title),
				title: title,
				cards: []
			});

			return Promise.resolve(_tickets2.default.concat([]));
		};

		BackendService.prototype.addCard = function addCard(card, listId) {
			card.id = generateId();
			card.createdDate = Date.now();
			card.updatedDate = Date.now();

			var list = _tickets2.default.filter(function (x) {
				return x.id === listId;
			});
			list[0].cards.push(card);

			return Promise.resolve(card);
		};

		BackendService.prototype.getCard = function getCard(cardId) {
			var cards = _tickets2.default.map(function (x) {
				return x.cards;
			}).reduce(function (p, c) {
				return p.concat(c);
			}).filter(function (x) {
				return x.id === cardId;
			});

			return Promise.resolve(cards[0]);
		};

		return BackendService;
	}();

	function createSlug(title) {
		return title.split(' ').join('-').toLowerCase();
	}

	function generateId() {
		var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
		return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
			return (Math.random() * 16 | 0).toString(16);
		}).toLowerCase();
	};
});
define('services/tickets',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var lists = [{
    id: 'backlog',
    title: 'Backlog',
    cards: [{
      "id": "57f98352f441de00d81e04aa",
      "title": "Culpa esse consectetur voluptate fugiat non aute reprehenderit nulla eiusmod amet est ex.",
      "description": "Lorem veniam labore cillum minim sunt reprehenderit occaecat pariatur anim. Aute magna ipsum non cupidatat do nulla cupidatat id sit fugiat dolor sunt. Ex incididunt ea fugiat nostrud sint incididunt enim enim eu magna fugiat adipisicing. Exercitation culpa aliqua tempor aliquip proident reprehenderit voluptate anim exercitation ipsum. Qui laboris cillum reprehenderit occaecat cupidatat enim enim aliquip anim amet elit enim.",
      "priority": 100,
      "createdDate": "Sun Mar 13 2016 19:05:41 GMT+0000 (UTC)",
      "updatedDate": "Sat Oct 08 2016 23:37:54 GMT+0000 (UTC)"
    }, {
      "id": "57f98352f8f442dd6fd2c65a",
      "title": "Adipisicing in deserunt laborum aliquip ad tempor in amet est irure qui cillum incididunt.",
      "description": "Anim non laboris non veniam quis anim dolore ex proident est. Anim in tempor consectetur Lorem dolore. Veniam minim sint in cillum laboris minim adipisicing anim pariatur occaecat dolore nisi et. Laborum officia ipsum consequat sint sit ut cupidatat. Commodo magna ea occaecat culpa irure ut fugiat voluptate culpa aute non proident sit.",
      "priority": 70,
      "createdDate": "Sat Aug 07 1976 10:59:48 GMT+0000 (UTC)",
      "updatedDate": "Sat Oct 08 2016 23:37:54 GMT+0000 (UTC)"
    }, {
      "id": "57f98352a724cf32218fdf92",
      "title": "Irure pariatur elit voluptate voluptate mollit qui sunt.",
      "description": "Tempor proident deserunt esse deserunt tempor ex exercitation nostrud aliqua id consectetur. Consectetur exercitation amet aliqua reprehenderit velit do commodo dolore pariatur ipsum tempor ex. Adipisicing ea duis aliqua mollit occaecat aliqua exercitation nostrud ea occaecat nulla ipsum magna est. Quis excepteur est est qui cillum id excepteur consequat adipisicing adipisicing et eu. Tempor anim sunt cupidatat quis veniam fugiat magna dolore sint.",
      "priority": 40,
      "createdDate": "Sun Mar 24 1996 16:53:50 GMT+0000 (UTC)",
      "updatedDate": "Sat Oct 08 2016 23:37:54 GMT+0000 (UTC)"
    }, {
      "id": "57f983527df6f9329473f52d",
      "title": "Sint ex dolor id irure consequat magna velit minim esse.",
      "description": "Culpa est et quis sunt veniam. Laborum occaecat voluptate consectetur nulla nostrud officia sint consectetur elit cupidatat pariatur sunt. Quis proident magna magna fugiat tempor esse sit mollit velit sint eiusmod tempor. Id Lorem quis est aute aute aute qui. Laborum consectetur irure sint minim nostrud Lorem veniam deserunt dolor aute.",
      "priority": 73,
      "createdDate": "Sat Sep 11 2004 06:08:13 GMT+0000 (UTC)",
      "updatedDate": "Sat Oct 08 2016 23:37:54 GMT+0000 (UTC)"
    }, {
      "id": "57f98352f7b51bd1d50c3ec5",
      "title": "Ipsum incididunt occaecat duis ad.",
      "description": "Tempor eu do velit culpa incididunt pariatur qui enim duis minim. Amet qui dolor nulla ad cillum sint velit nulla sit. Adipisicing cillum eiusmod sit dolore do cillum anim velit officia velit esse laborum elit. Ad culpa aliquip mollit est cupidatat pariatur Lorem ipsum esse proident elit sunt. Laboris aliqua esse aute in dolore veniam id ipsum nostrud exercitation consectetur et in proident.",
      "priority": 47,
      "createdDate": "Mon Feb 14 2000 16:03:56 GMT+0000 (UTC)",
      "updatedDate": "Sat Oct 08 2016 23:37:54 GMT+0000 (UTC)"
    }]
  }, {
    id: 'in-progress',
    title: 'In Progress',
    cards: []
  }, {
    id: 'done',
    title: 'Done',
    cards: []
  }];

  exports.default = lists;
});
define('resources/attributes/draggable',['exports', 'aurelia-framework', 'dragula'], function (exports, _aureliaFramework, _dragula) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DraggableCustomAttribute = undefined;

    var _dragula2 = _interopRequireDefault(_dragula);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var DraggableCustomAttribute = exports.DraggableCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
        function DraggableCustomAttribute(element) {
            _classCallCheck(this, DraggableCustomAttribute);

            this.element = element;
            this.drake = drake;

            this.drake.containers.push(element);
        }

        DraggableCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

        return DraggableCustomAttribute;
    }()) || _class);


    var drake = (0, _dragula2.default)({
        revertOnSpill: true
    });
});
define('resources/elements/list-container',['exports', 'aurelia-framework', 'services/backend-service'], function (exports, _aureliaFramework, _backendService) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ListContainer = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

    var ListContainer = exports.ListContainer = (_dec = (0, _aureliaFramework.inject)(_backendService.BackendService), _dec(_class = (_class2 = function () {
        function ListContainer(backendService) {
            _classCallCheck(this, ListContainer);

            _initDefineProp(this, 'id', _descriptor, this);

            _initDefineProp(this, 'title', _descriptor2, this);

            _initDefineProp(this, 'cards', _descriptor3, this);

            this.draftCard = null;

            this.backendService = backendService;
        }

        ListContainer.prototype.addCard = function addCard() {
            var _this = this;

            this.backendService.addCard({
                title: this.draftCard,
                status: this.id,
                description: ''
            }, this.id).then(function (ticket) {
                _this.draftCard = null;
            });
        };

        return ListContainer;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'id', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'cards', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});
define('resources/value-converters/filter',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var FilterValueConverter = exports.FilterValueConverter = function () {
        function FilterValueConverter() {
            _classCallCheck(this, FilterValueConverter);
        }

        FilterValueConverter.prototype.toView = function toView(array, config) {
            return array.slice().filter(function (x) {
                return x[config.propertyName] == config.value;
            });
        };

        return FilterValueConverter;
    }();
});
define('detail',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Detail = exports.Detail = function Detail() {
    _classCallCheck(this, Detail);
  };
});
define('index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function () {
    function Index() {
      _classCallCheck(this, Index);
    }

    Index.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'My Router Title';
      config.map([{ name: 'app', title: 'Home', moduleId: 'app', route: ['', '/app'], nav: true }, { name: 'detail', title: 'Detail', moduleId: 'detail', route: ['detail'], nav: true }]);

      this.router = router;
    };

    return Index;
  }();
});
define('text!app.css', ['module'], function(module) { module.exports = "body {\n    background: #0079a1;\n}\n\n.main-container {\n    white-space: nowrap;\n}\n\n.new-list {\n    display: inline-block;\n    margin: 1em;\n\tvertical-align: top;\n\twhite-space: normal;\n    width: 300px;\n}\n\n.new-list.panel {\n    border-bottom: 0;\n}\n\n.new-list input {\n    color: white;\n    background: rgba(255, 255, 255, 0.5);\n    font-size: 19px;\n    border: 0;\n}\n\n.new-list .btn {\n    border: 0;\n}\n"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"resources/elements/list-container\"></require>\n    <require from=\"./app.css\"></require>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <section class=\"au-animate\">\n                <div class=\"container-fluid main-container\">\n                    <list-container repeat.for=\"list of lists\" id.bind=\"list.id\" title.bind=\"list.title\" cards.bind=\"list.cards\"></list-container>\n\n                    <div class=\"new-list panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <input value.bind=\"newList\" type=\"text\" class=\"form-control\" />\n                            <button click.delegate=\"addList()\" class=\"btn btn-primary btn-block\">Add a list...</button>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n</template>\n"; });
define('text!resources/elements/list-card.css', ['module'], function(module) { module.exports = "list-card .well {\n\tbackground: white;\n\tborder-bottom: 3px solid rgba(0, 0, 0, 0.2);\n}"; });
define('text!resources/elements/list-card.html', ['module'], function(module) { module.exports = "<template bindable=\"card\">\n    <require from=\"./list-card.css\"></require>\n\n    <div class=\"well well-sm\">\n        ${card.title}\n    </div>\n</template>\n"; });
define('text!resources/elements/list-container.css', ['module'], function(module) { module.exports = "list-container {\n\tdisplay: inline-block;\n\tmargin: 1em;\n\tvertical-align: top;\n\twhite-space: normal;\n}\n\nlist-container ul {\n\tmin-height: 30px;\n}\n\nli.gu-mirror {\n\ttransform: rotate(5deg);\n\tlist-style: none;\n}\n\nlist-container .panel {\n\tborder-bottom: 3px solid rgba(0, 0, 0, 0.2);\n\twidth: 300px;\n}\n\nlist-container .panel-default .panel-heading {\n\tbackground: #e0e0e0;\n\tborder-bottom: 0;\n\tfont-weight: bold;\n}\n\nlist-container .panel-default .panel-body {\n\tbackground: #e0e0e0;\n\tpadding-top: 0;\n\tpadding-bottom: 0;\n}\n\nlist-container .panel-default .panel-footer {\n\tbackground: #e0e0e0;\n\tborder-top: 0;\n}\n\nlist-container textarea.form-control {\n\tresize: none;\n\tborder: 0;\n\tpadding: 0;\n}"; });
define('text!resources/elements/list-container.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"resources/attributes/draggable\"></require>\n    <require from=\"resources/elements/list-card.html\"></require>\n    <require from=\"./list-container.css\"></require>\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>${title}</h4>\n        </div>\n        <div class=\"panel-body\">\n            <ul class=\"list-unstyled\">\n                <li repeat.for=\"card of cards\">\n                    <list-card card.bind=\"card\" draggable.bind=\"card\"></list-card>\n                </li>\n            </ul>\n        </div>\n        <div class=\"panel-footer\">\n            <div class=\"well well-sm\">\n                <textarea value.bind=\"draftCard\" class=\"form-control\"></textarea>\n                <button click.delegate=\"addCard()\" class=\"btn btn-primary btn-block\">Add card</button>\n            </div>\n        </div>\n    </div>\n</template>\n"; });
define('text!detail.html', ['module'], function(module) { module.exports = "<template>\n  <h1>Detail</h1>\n</template>\n"; });
define('text!index.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container-fluid\">\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"row of router.navigation\"><a href.bind=\"row.href\">${row.title}</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-view></router-view>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map