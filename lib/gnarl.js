var cp = require('child_process')

exports.run = run
exports.parse = parse_into_cmd
exports.spawn = spawn_cmd



function run(cmd_string){
  spawn_cmd(parse_into_cmd(cmd_string))
}

function parse_into_cmd(cmd){
  var sections = cmd.split(' ')
  return {
    command: sections.shift(),
    options: sections
  }
}

function spawn_cmd(cmd){
  var p = cp.spawn(cmd.command, cmd.options)

  // Propagate child stdout to parent
  p.stdout.pipe(process.stdout)
  p.stderr.pipe(process.stderr)

  // Make any child error close the parent
  p.on('error', process.exit.bind(process, null))

  // Propagate parent exit to child
  process.on('exit', p.kill.bind(p))
}