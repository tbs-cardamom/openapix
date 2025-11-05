const { awscdk, TextFile, javascript } = require('projen');

const nodejsVersion = '14.17.6';

const project = new awscdk.AwsCdkConstructLibrary({

  // Metadata
  stability: 'experimental',
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  name: '@tbs-cardamom/openapix',
  description: 'Combine the power of AWS CDK & OpenAPI YAML Schema Definitions',
  repositoryUrl: 'https://github.com/tbs-cardamom/openapix.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws', 'cloudfront', 'api-gateway', 'rest-api', 'open-api', 'swagger'],

  // Publish configuration
  defaultReleaseBranch: 'main',
  majorVersion: 0,
  releaseBranches: {
    beta: {
      majorVersion: 1,
      prerelease: 'beta',
      npmDistTag: 'beta',
    },
  },
  packageManager: javascript.NodePackageManager.NPM,
  npmAccess: javascript.NpmAccess.RESTRICTED,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmTokenSecret: 'NPM_TOKEN',
  //   python: {
  //     distName: 'alma-cdk.openapix',
  //     module: 'alma_cdk.openapix',
  //   },

  // Dependencies
  minNodeVersion: nodejsVersion,
  cdkVersion: '2.32.1',
  constructsVersion: '10.0.0',
  peerDeps: [
    'constructs',
    'aws-cdk-lib',
  ],
  devDeps: [
    'constructs',
    'aws-cdk-lib',
    'semver',
    '@types/lodash',
    '@types/js-yaml',
    '@types/omit-deep-lodash',
    '@types/prettier@2.6.0',
    '@types/semver',
  ],
  bundledDeps: [
    'change-case',
    'lodash',
    'js-yaml',
    'omit-deep-lodash',
    'semver',
  ],

  // Gitignore
  gitignore: [
    '.DS_Store',
    '/examples/**/cdk.context.json',
    '/examples/**/node_modules',
    '/examples/**/cdk.out',
    '/examples/**/.git',
    '.vscode',
  ],


});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.addPackageIgnore('/examples/');


project.synth();
