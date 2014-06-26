# gnarl

Composite processes


## Installation

    npm install gnarl



## API

##### .run()

    run :: String command ->

Run a processes that will terminate when the parent exists. Arguments:

- `command :: String`  
A valid command line instruction, e.g. `'component-build --watch --reload'`. Invoke this many times to create as many dependent processes as desired.



## CLI

See:

    > gnarl -h