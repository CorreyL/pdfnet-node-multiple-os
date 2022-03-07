const { execSync } = require('child_process')

const WINDOWS_PLATFORM_ID = 'win32';
const LINUX_PLATFORM_ID = 'linux';
const electronTargetVersion = '16.0.9';
const targetArch = 'x64';

const buildInstallCmd = (platform) => [
    'npm i @pdftron/pdfnet-node --runtime=electron',
    `--target=${electronTargetVersion}`,
    `--target_platform=${platform}`,
    `--target_arch=${targetArch}`,
].join(' ');

exports.default = async function(context) {
  // This runs before each build, perhaps T&S can use this to swap the binaries?
  const {
    electronPlatformName,
  } = context;
  if (electronPlatformName === WINDOWS_PLATFORM_ID) {
    execSync(buildInstallCmd(WINDOWS_PLATFORM_ID));
  } else if (electronPlatformName === LINUX_PLATFORM_ID) {
    execSync(buildInstallCmd(LINUX_PLATFORM_ID));
  } else {
    console.log(`Unrecognized target: ${electronPlatformName}`)
  }
}