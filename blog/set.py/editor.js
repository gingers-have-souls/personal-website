var setpre = document.getElementById("setoutput");
var codefile = '';
fetch('set.py')
	.then(data => data.text())
	.then(text => codefile = text)
	.then(() => setreset());

function outf(text) {
	setpre.innerHTML = setpre.innerHTML + text;
}

function builtinRead(x) {
	if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
		throw "File not found: '" + x + "'";
	return Sk.builtinFiles["files"][x];
}

function myinputfun(text) {
	outf(text);
	var input = document.createElement('input');
	setpre.appendChild(input);
	input.focus();
	return new Promise(function(resolve) {
		input.addEventListener('keyup', function(event) {
			if (event.key === 'Enter') {
				var text = input.value;
				setpre.removeChild(input);
				outf(text + '\n');
				resolve(text);
			}
		});
	});
}

function setclearout() {
	setpre.innerHTML = '';
}

function setreset() {
	editor.setValue(codefile);
}

function setrun() {
	setpre.innerHTML = '';
	Sk.pre = "setoutput";
	Sk.configure({output:outf,
		read:builtinRead,
		inputfun:myinputfun,
		inputfunTakesPrompt: true,
		__future__: Sk.python3});
	var myPromise = Sk.misceval.asyncToPromise(function() {
		return Sk.importMainWithBody("", false, editor.getValue(), true);
	});
	myPromise.catch(function(error) {
		outf(error.toString());
	});
}

var editor = CodeMirror.fromTextArea(document.getElementById('setcode'), {
	theme: "monokai",
	mode: "python",
});
