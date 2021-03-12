class Resource {
  constructor(name, url) {
    this.url = url;
    this.name = name;
  }
  getUrl () {
    return this.url;
  }
  getName() {
    return this.name;
  }
};
module.exports = { Resource };
