const { execSync } = require('child_process')

exports.default = async function(context) {
  // This runs before each build, perhaps T&S can use this to swap the binaries?
  const {
    electronPlatformName,
  } = context;
  if (electronPlatformName === 'win32') {
    execSync('npm i @pdftron/pdfnet-node --runtime=electron --target=16.0.9 --target_platform=win32 --target_arch=x64');
  } else if (electronPlatformName === 'linux') {
    execSync('npm i @pdftron/pdfnet-node --runtime=electron --target=16.0.9 --target_platform=linux --target_arch=x64');
  } else {
    console.log(`Unrecognized target: ${electronPlatformName}`)
  }
}