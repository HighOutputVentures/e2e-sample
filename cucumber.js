const common = [
    'features/**/*.feature',
    '--require-module ts-node/register',
    '--require features/**/*.ts',
    '--fail-fast',
    '--format progress-bar',
    '--publish-quiet',
    '--parallel 8'
  ];
  
  module.exports = {
    default: [...common, '--tags "not @ignore and not @only"'].join(' '),
    only: [...common, '--tags "@only"'].join(' '),
  };
  