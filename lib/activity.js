var v = require('./var.js')
var fs = require('fs-extra')
var ejs = require('ejs')
var path = require('path')
var _ = require('lodash')

function render(fileName, locals){
	return ejs.render(fs.readFileSync(path.resolve(__dirname + '/../templates/'+fileName+'.ejs'), 'utf-8'), locals)
}

var data = {
	activity: render('activity', {name: v.name, path: v.projPath}),
	view: render('view', {name: v.name, path: v.projPath}),
	touchListener: render('touchListener', {name: v.name, path: v.projPath}),
	manifest: function(){
		var manifest = fs.readFileSync(v.manifestPath, 'utf-8');

		var partOne = manifest.match(/[\s\S]+<\/application>/).toString().replace("</application>", "");
		var partTwo = manifest.match(/<\/application>[\s\S]+/).toString();

		var newManifest = partOne + render('manifest', {name: v.name}) + partTwo;

		return newManifest;
	}
}

var writePath = v.dir+'/'+v.name+'/'+v.name

var activity = {
	generate: function(options){
		fs.outputFileSync(writePath+'Activity.java', data.activity);
		fs.outputFileSync(writePath+'View.java', data.view);
		fs.outputFileSync(writePath+'TouchListener.java', data.touchListener);
		fs.outputFileSync(v.manifestPath, data.manifest());
	}
}

module.exports = activity