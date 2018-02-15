var os = require('os')
var path = require('path')

var platform = os.platform()

if (platform === 'darwin') {
  platform = 'mac';
} else if (platform === 'win32') {
  platform = 'win';
}

if (platform !== 'linux' && platform !== 'mac' && platform !== 'win') {
  console.error('Unsupported platform.')
  process.exit(1)
}

var arch = os.arch()
if (platform === 'mac' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}

var ffmpegPath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win' ? 'ffmpeg.exe' : 'ffmpeg'
)

exports.path = ffmpegPath;
