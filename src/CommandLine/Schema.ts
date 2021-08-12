import { Auth } from '../Providers/GitHubProvider';
import { ParameterInfo } from './ParameterInfo';

const command = 'npm start';
const auth = new Auth('sfm-tools', 'branch-remover', 'a1ee8b13');

export const schema: Array<ParameterInfo> = [
  {
    name: 'version',
    aliases: ['v'],
    description: [
      'Displays the version number of the application.',
    ],
    examples: [{
      example: `${command} --version`,
    }],
  },
  {
    name: 'help',
    aliases: ['h'],
    description: [
      'Displays help information.',
    ],
    examples: [
      {
        title: 'Display general help information:',
        example: `${command} --help`,
      },
      {
        title: 'Display detailed information on the specified command:',
        example: `${command} --help config`,
      },
    ],
  },
  {
    name: 'test',
    aliases: ['t'],
    description: [
      'Test mode, automatic removing branches is disabled.',
    ],
    examples: [{
      example: `${command} --provider github --github.token ${auth.token} --github.owner ${auth.owner} --github.repo ${auth.repo} --test`,
    }],
  },
  {
    name: 'provider',
    aliases: ['p'],
    description: [
      'Specifies the provider name.',
      'Expected values: github (default).',
    ],
    examples: [{
      example: `${command} --provider github --github.token ${auth.token} --github.owner ${auth.owner} --github.repo ${auth.repo}`,
    }],
  },
  {
    name: 'quiet',
    aliases: ['q', 'yes', 'y'],
    description: [
      'The presence of this parameter disables the confirmation request to remove branches.',
      'Matching branches will be removed immediately.',
    ],
    examples: [{
      example: `${command} --provider github --github.token ${auth.token} --github.owner ${auth.owner} --github.repo ${auth.repo} --quiet`,
    }],
  },
  {
    name: 'ignore',
    aliases: ['i'],
    description: [
      'A regex pattern that allows specifying branches to ignore.',
    ],
    examples: [{
      title: 'The following example prevents the removing of branches named master, beta and release:',
      example: `${command} --provider github --github.token ${auth.token} --github.owner ${auth.owner} --github.repo ${auth.repo} --ignore ^(master|beta|release)$`,
    }],
  },
  {
    name: 'merged',
    aliases: ['m'],
    description: [
      'Allows specifying the time elapsed since the merge.',
      'For example: 2 years (or 2y); 6 months; 5 days (or 5d);',
      '2 hours (or 2h); 30 minutes (or 30m); etc.',
      'Default: all (all merged branches).',
    ],
  },
  {
    name: 'stale',
    aliases: ['s'],
    description: [
      'Allows specifying the time after which the unmerged branch',
      'can be considered obsolete since the last update.',
      'For example: 2 years (or 2y), 6 months, etc.',
    ],
  },
  {
    name: 'config',
    aliases: ['c'],
    description: [
      'Path to custom js-file containing branch processing parameters.'
    ],
  },
  {
    name: 'github.token',
    description: [
      'GitHub access token.',
      'https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token',
      'Required only for provider "github".',
    ],
  },
  {
    name: 'github.owner',
    description: [
      'Username or organization name on GitHub. For example: sfm-tools.',
      'Required only for provider "github".',
    ],
  },
  {
    name: 'github.repo',
    description: [
      'Repository name on GitHub. For example: branch-remover.',
      'Required only for provider "github".',
    ],
  },
];