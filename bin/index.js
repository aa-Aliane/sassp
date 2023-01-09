#!/usr/bin/env node

/**
 * sassp
 * Create basics sass partials structure folder
 *
 * @author aa-Aliane <aazaz>
 */

const init = require('../utils/init');
const cli = require('../utils/cli');
const log = require('../utils/log');



const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const abstract = require('../lib/abstract');
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('create')) {
		abstract();
	}
})();
