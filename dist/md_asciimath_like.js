
    document.addEventListener("DOMContentLoaded", function()
	{
		var parser = new AsciiMathParser();
		var aa = {};
		var ql_aa = {};
		var idx = 0;
		var jdx = 0;
		
		function asciimath2latex(opener, closer)
		{
			return function(formula)
			{
				return opener + parser.parse(formula.substring(opener.length, formula.length-closer.length).replaceAll('&gt;', '>').replaceAll('&lt;', '<').replaceAll('==>',' implies ')) + closer
			}
		}
		
		document.body.innerHTML = document.body.innerHTML
			
			.replaceAll(        /\ndef ([^=\n]+)=\s*([^\n]+)/g,
				function (foundString, question, answer) {
					aa[idx++] = answer;
					return foundString;
				}
			)
			
			.replaceAll( /\[NAVBAR (.*)\]/g, function(_,list){ return '<div id="naw-bars" style="position: fixed; top: 0px; left: 0px; bottom: 0px; width: 0%; padding: 2rem 1rem; overflow-y: scroll; scrollbar-width: thin; resize: horizontal; overflow: hidden; background-color:rgba(45,45,45,0.9);"><ul class="nav-btns">' + list.split(',').map(x => '<a href="'+x.split('::').reverse().join('">')+'</a>').join('<br>') + '</ul></div>'; } )
			
			.replaceAll(/\\\[[^\n\\]+\\\]/g, asciimath2latex( "$$", "$$" ))
			.replaceAll(/\\\([^\n\\]+\\\)/g, asciimath2latex("\\(", "\\)"))
	
			.replaceAll(   /```([^`]+)```/g, "<pre>$1</pre>"  )
			.replaceAll(     /`([^`]+)`/g  , "<code>$1</code>")
			
			.replaceAll(/\n#####\s+(.+)\n/g, "\n<h5>$1</h5>\n")
			.replaceAll( /\n####\s+(.+)\n/g, "\n<h4>$1</h4>\n")
			.replaceAll(  /\n###\s+(.+)\n/g, "\n<h3>$1</h3>\n")
			.replaceAll(   /\n##\s+(.+)\n/g, "\n<h2>$1</h2>\n")
			.replaceAll(    /\n#\s+(.+)\n/g, "\n<h1>$1</h1>\n")
			
			.replaceAll(/\*\*([^\n(\*\*)]+)\*\*/g, "<b>$1</b>")
			.replaceAll(        /\*([^\n*]+)\*/g, "<i>$1</i>" )
			.replaceAll(        /\n- (.+)/g, "<li>$1</li>")
			.replaceAll(        /\n1(\<li\>.+\<\/li\>\n)/g,     "<ol>$1</ol>")
			
			
			.replaceAll(        /\ndef ([^=\n]+)=\s*([^\n]+)/g,
				function (_, question, answer) {
					ql_aa[question] = aa[jdx++];
					return "<dl><dt>" + question + "</dt><dd>" + answer + "</dd></dl>";
				}
			)
			.replaceAll(        /\\\((.*): e q(.*)\\\)/g, '\\($1=$2\\)' )
			.replaceAll(        /\\\[(.*): e q(.*)\\\]/g, '\\[$1=$2\\]' )
			
			.replaceAll(        /!\[([^\n]+)\]\((.*)\)/g,       "<img src=\"$1\" alt=\"$2\">")
			.replaceAll(        /\[([^\n]+)\]\((.*)\)/g,       "<a href=\"$1\">$2<\a>")
			.replaceAll(        /\[yt ([^\n]+)\]/g, "<iframe width=\"560\" height=\"315\" src=\"$1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
			.replaceAll(        /\[TEST ([^\n\s]+)\]/g, '<div id="TEST">Score: <span id="$1_score">0</span><br><span id="$1_question"></span><br><input id="$1" type="text" size="40"><br><span id="$1_answer"></span><br><span id="$1_hint" style="color: grey"></span><br></div>' )
			.replaceAll(        /\<tab(\d+)\>/g, function(_,line){return "&nbsp;".repeat(parseInt(line))})
			.replaceAll(               /\n\n+/g, function(newLines) { return "\n" + "<br>".repeat(newLines.length-1) })
			;
			
		
        renderMathInElement(document.body, {/* ...options... */});
		
		var indexes = {};
		
		document.querySelectorAll("input").forEach(function(input){
			
			if (!(input.id in indexes))
			{
				indexes[input.id] = {'kdx':0, 'ldx':0};
			}
			
			var handleInput = function(){
				var qSpan = document.getElementById(input.id + "_question");
				var aSpan = document.getElementById(input.id + "_answer");
				qSpan.textContent = Object.keys(ql_aa)[indexes[input.id].kdx];
				aSpan.textContent = input.value.replaceAll(/\\\((.*):eq([^a-zA-Z].*)\\\)/g,'\\($1=$2\\)').replaceAll(/\\\([^\n\\]+\\\)/g, asciimath2latex("\\(", "\\)"));
				renderMathInElement(qSpan, {});
				renderMathInElement(aSpan, {});
			};
			var handleKeyPress = function(e){
			
				var hSpan = document.getElementById(input.id + "_hint");
				
				if (e.key == 'Enter') {
					if ( input.value.replaceAll(/[\s\n]/g, '') == ql_aa[Object.keys(ql_aa)[indexes[input.id].kdx]].replaceAll('&gt;','>').replaceAll('&lt;','<').replace(/\s/g, ''))
					{
						++indexes[input.id].kdx;
						var sSpan = document.getElementById(input.id + "_score");
						sSpan.textContent = (++indexes[input.id].ldx).toString();
						hSpan.textContent = '';
					}
					else
					{
						hSpan.textContent = ql_aa[Object.keys(ql_aa)[indexes[input.id].kdx]].replaceAll('&gt;','>').replaceAll('&lt;','<');
						indexes[input.id].kdx = Math.max(0, indexes[input.id].kdx - 2);
					}
					input.value = '';
					handleInput();
				}
				else
				{
					hSpan.textContent = '';
				}
				
				var putParenthesis = function(opnr,clsr) {
					var selectionStart = input.selectionStart;
					var selectionEnd = input.selectionEnd;
					input.value = input.value.substring(0, input.selectionStart) + opnr + input.value.substring(input.selectionStart, input.selectionEnd) + clsr + input.value.substring(input.selectionEnd, input.value.length);
					input.selectionStart = selectionStart + opnr.length;
					input.selectionEnd = selectionEnd + opnr.length;
				}
				
				if (e.key == 'Tab' && e.ctrlKey)
				{
					putParenthesis('\\(', '\\)');
				}
				else if (e.key == '{')
				{
					putParenthesis('', '}');
				}
				else if (e.key == '(')
				{
					putParenthesis('', ')');
				}
				else if (e.key == '[')
				{
					putParenthesis('', ']');
				}
			};
			handleInput();
			input.addEventListener('input'   , handleInput   );
			input.addEventListener('keypress', handleKeyPress);
		})
    });
