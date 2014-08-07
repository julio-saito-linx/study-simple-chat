var Mogger = require("mogger");

module.exports = function(express) {

	var tracer = new Mogger.Tracer({
		showPause: true,
		interceptors: [
			{
				filterRegex: /./i,
				callback: function(info) {
					var methodName = info.method;
					var args = info.args && info.args.length > 0 && info.args[0] && info.args[0].toString();
					return methodName + '("' + args + '")';
				}
			}
		],		
	});

	tracer.traceObj({
	  before: { message: 'req:  ' },
	  target: express.request
	});

	tracer.traceObj({
	  before: { message: 'resp: ' },
	  target: express.response
	});

	tracer.traceObj({
	  before: { message: 'app : ' },
	  target: express.application
	});

	tracer.traceObj({
	  before: { message: 'rout: ' },
	  target: express.Router.prototype
	});

};