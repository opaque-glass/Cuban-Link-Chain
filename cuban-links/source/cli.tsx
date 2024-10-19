#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
// import App from './app.js';
import { Select } from '../composables/select.js';

const cli = meow(
	`
	Usage
	  $ cuban-links

	Options
		--name  Your name

	Examples
	  $ cuban-links --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);

console.log(cli)

render(<Select/>);
// render(<App name={cli.flags.name} />);
