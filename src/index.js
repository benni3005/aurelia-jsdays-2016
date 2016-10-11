export class Index {

  configureRouter (config, router) {
    config.title = 'My Router Title';
    config.map([
      { name: 'app', title: 'Home', moduleId: 'app', route: ['', '/app'], nav: true },
      { name: 'detail', title: 'Detail', moduleId: 'detail', route: ['detail'], nav: true }
    ]);

    this.router = router;
  }
}
