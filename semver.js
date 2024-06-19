const fs = require('fs');
const path = require('path');
const semverInc = require('semver/functions/inc');

class AppSemverConstructClass {
  packageJsonPath = path.join(__dirname, 'package.json');
  buildGradlePath = path.join(__dirname, 'android', 'app', 'build.gradle');
  validReleaseMode = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease',
  ];
  validPreReleaseMode = ['premajor', 'preminor', 'prepatch', 'prerelease'];
  validIdentifiers = ['alpha', 'beta', undefined];
  packageJson = fs.readFileSync(this.packageJsonPath, 'utf-8');
  packageData = JSON.parse(this.packageJson);
  version = this.packageData.version;

  updatedVersion = '';
  relase = '';
  identifier = undefined;

  constructor(relase = 'patch', identifier = undefined) {
    this.relase = relase;
    this.identifier = identifier;
  }

  buildVerion() {
    this.validateInput();
    this.setUpdateVersion();
    this.setUpdatePackageJsonVersion();
    this.setUpdateAndroidVerion();
  }

  validateInput() {
    if (!this.validReleaseMode.includes(this.relase)) {
      throw new Error('invalid release mode');
    }
    if (!this.validIdentifiers.includes(this.identifier)) {
      throw new Error('invalid identifier');
    }
    if (
      this.identifier === undefined &&
      this.validPreReleaseMode.includes(this.relase)
    ) {
      throw new Error('identifier is require for pre-release mode');
    }
  }

  setUpdateVersion() {
    try {
      this.updatedVersion = semverInc(
        this.version,
        this.relase,
        this.identifier,
        false,
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  setUpdatePackageJsonVersion() {
    try {
      this.packageData.version = this.updatedVersion;
      const updatedPackageJson = JSON.stringify(this.packageData, null, 2);
      fs.writeFileSync(this.packageJsonPath, updatedPackageJson, 'utf-8');
      this.logUpdateMessage('package.json');
    } catch (e) {
      throw new Error(e);
    }
  }

  setUpdateAndroidVerion() {
    const [major, minor, patch] = this.version.split('.').map(Number);
    const versionCode = major * 10000 + minor * 100 + patch;
    const versionCodeRegex = /versionCode\s+\d+/;
    const versionNameRegex = /versionName\s+"[^"]+"/;
    let buildGradle = fs.readFileSync(this.buildGradlePath, 'utf-8');

    buildGradle = buildGradle.replace(
      versionCodeRegex,
      `versionCode ${versionCode}`,
    );
    buildGradle = buildGradle.replace(
      versionNameRegex,
      `versionName "${this.updatedVersion}"`,
    );

    fs.writeFileSync(this.buildGradlePath, buildGradle, 'utf-8');
    this.logUpdateMessage('/android/app/build.gradle');
  }
  logUpdateMessage(fileName) {
    console.log('-  ', fileName);
    console.log(
      `Version updated from ${this.version} to ${this.updatedVersion}`,
    );
    console.log();
  }
}

const args = process.argv.slice(2);
const release = args[0] && args[0].split('=')[1];
const identifier = args[1] && args[1].split('=')[1];
new AppSemverConstructClass(release, identifier).buildVerion();
