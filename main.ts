import commander from 'commander';
import branchInit from './commands/branch';
import { name, version } from './package.json';

const program = new commander.Command();

branchInit(program);
// program
//     .command('branch')
//     .description('test command')
//     .option('-i, --install', 'Install node to the Project')
//     .option('-c, --create <name>', 'Create node from stubs')
//     .option('-l, --local', 'Install node to the Local Project')
//     .option('-up, --update-project', 'Update Project before process command')
//     .action(async (options) => {
//         console.log('sss', options);
//     });

program.name(name);
program.version(version);

program.parse();
