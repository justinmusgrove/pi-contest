var rp = require("request-promise");
var rx = require("rx")

const baseUrl = `https://apidigits.apispark.net/v1/digits/`;

rx.Observable
	.range(0, 1000)
	.flatMap(x => rp({ uri: baseUrl + x, json: true }))
	.filter(x => x.content.includes("12345"))
	.subscribe(x => console.log(x.id));