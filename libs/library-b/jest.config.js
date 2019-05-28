module.exports = {
  name: 'library-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/library-b',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
