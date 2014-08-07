var Mogger = require("mogger");

module.exports = function(express) {

	var tracer = new Mogger.Tracer();

	tracer.traceObj({
	  before: { message: 'express: ' },
	  target: express
	});

	tracer.traceObj({
	  before: { message: 'express.request: ' },
	  target: express.request
	});

	tracer.traceObj({
	  before: { message: 'express.response: ' },
	  target: express.response
	});

};