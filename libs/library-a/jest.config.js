module.exports = {
  name: 'library-a',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/library-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
