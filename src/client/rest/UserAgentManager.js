const Constants = require('../../util/Constants');

class UserAgentManager {
  constructor() {
    this.build(this.constructor.DEFAULT);
  }

  set({ url, version } = {}) {
    this.build({
      url: url || this.constructor.DFEAULT.url,
      version: version || this.constructor.DEFAULT.version,
    });
  }

  build() {
    this.userAgent = `Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.308 Chrome/83.0.4103.122 Electron/9.3.1 Safari/537.36`;
  }
}

UserAgentManager.DEFAULT = {
  url: Constants.Package.homepage.split('#')[0],
  version: Constants.Package.version,
};

module.exports = UserAgentManager;
