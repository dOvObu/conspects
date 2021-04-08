var t=function(){this.decimalsign="\\.",this.setup_symbols(),this.sort_symbols()};t.prototype.setup_symbols=function(){this.greek_letters=["alpha","beta","gamma","Gamma","delta","Delta","epsilon","varepsilon","zeta","eta","theta","Theta","vartheta","iota","kappa","lambda","Lambda","mu","nu","xi","Xi","pi","Pi","rho","sigma","Sigma","tau","upsilon","phi","Phi","varphi","chi","psi","Psi","omega","Omega"],this.relations=[{asciimath:":=",tex:":="},{asciimath:":|:",tex:"\\|"},{asciimath:"=>",tex:"\\Rightarrow"},{asciimath:"approx",tex:"\\approx"},{asciimath:"~~",tex:"\\approx"},{asciimath:"cong",tex:"\\cong"},{asciimath:"~=",tex:"\\cong"},{asciimath:"equiv",tex:"\\equiv"},{asciimath:"-=",tex:"\\equiv"},{asciimath:"exists",tex:"\\exists"},{asciimath:"EE",tex:"\\exists"},{asciimath:"forall",tex:"\\forall"},{asciimath:"AA",tex:"\\forall"},{asciimath:">=",tex:"\\ge"},{asciimath:"ge",tex:"\\ge"},{asciimath:"gt=",tex:"\\geq"},{asciimath:"geq",tex:"\\geq"},{asciimath:"gt",tex:"\\gt"},{asciimath:"in",tex:"\\in"},{asciimath:"<=",tex:"\\le"},{asciimath:"le",tex:"\\le"},{asciimath:"lt=",tex:"\\leq"},{asciimath:"leq",tex:"\\leq"},{asciimath:"lt",tex:"\\lt"},{asciimath:"models",tex:"\\models"},{asciimath:"|==",tex:"\\models"},{asciimath:"!=",tex:"\\ne"},{asciimath:"ne",tex:"\\ne"},{asciimath:"notin",tex:"\\notin"},{asciimath:"!in",tex:"\\notin"},{asciimath:"prec",tex:"\\prec"},{asciimath:"-lt",tex:"\\prec"},{asciimath:"-<",tex:"\\prec"},{asciimath:"preceq",tex:"\\preceq"},{asciimath:"-<=",tex:"\\preceq"},{asciimath:"propto",tex:"\\propto"},{asciimath:"prop",tex:"\\propto"},{asciimath:"subset",tex:"\\subset"},{asciimath:"sub",tex:"\\subset"},{asciimath:"subseteq",tex:"\\subseteq"},{asciimath:"sube",tex:"\\subseteq"},{asciimath:"succ",tex:"\\succ"},{asciimath:">-",tex:"\\succ"},{asciimath:"succeq",tex:"\\succeq"},{asciimath:">-=",tex:"\\succeq"},{asciimath:"supset",tex:"\\supset"},{asciimath:"sup",tex:"\\supset"},{asciimath:"supseteq",tex:"\\supseteq"},{asciimath:"supe",tex:"\\supseteq"},{asciimath:"vdash",tex:"\\vdash"},{asciimath:"|--",tex:"\\vdash"}],this.constants=[{asciimath:"dt",tex:"dt"},{asciimath:"dx",tex:"dx"},{asciimath:"dy",tex:"dy"},{asciimath:"dz",tex:"dz"},{asciimath:"prime",tex:"'"},{asciimath:"implies",tex:"\\implies"},{asciimath:"epsi",tex:"\\epsilon"},{asciimath:"leftrightarrow",tex:"\\leftrightarrow"},{asciimath:"Leftrightarrow",tex:"\\Leftrightarrow"},{asciimath:"rightarrow",tex:"\\rightarrow"},{asciimath:"Rightarrow",tex:"\\Rightarrow"},{asciimath:"backslash",tex:"\\backslash"},{asciimath:"leftarrow",tex:"\\leftarrow"},{asciimath:"Leftarrow",tex:"\\Leftarrow"},{asciimath:"setminus",tex:"\\setminus"},{asciimath:"bigwedge",tex:"\\bigwedge"},{asciimath:"diamond",tex:"\\diamond"},{asciimath:"bowtie",tex:"\\bowtie"},{asciimath:"bigvee",tex:"\\bigvee"},{asciimath:"bigcap",tex:"\\bigcap"},{asciimath:"bigcup",tex:"\\bigcup"},{asciimath:"square",tex:"\\square"},{asciimath:"lamda",tex:"\\lambda"},{asciimath:"Lamda",tex:"\\Lambda"},{asciimath:"aleph",tex:"\\aleph"},{asciimath:"angle",tex:"\\angle"},{asciimath:"frown",tex:"\\frown"},{asciimath:"qquad",tex:"\\qquad"},{asciimath:"cdots",tex:"\\cdots"},{asciimath:"vdots",tex:"\\vdots"},{asciimath:"ddots",tex:"\\ddots"},{asciimath:"cdot",tex:"\\cdot"},{asciimath:"star",tex:"\\star"},{asciimath:"|><|",tex:"\\bowtie"},{asciimath:"circ",tex:"\\circ"},{asciimath:"oint",tex:"\\oint"},{asciimath:"grad",tex:"\\nabla"},{asciimath:"quad",tex:"\\quad"},{asciimath:"uarr",tex:"\\uparrow"},{asciimath:"darr",tex:"\\downarrow"},{asciimath:"downarrow",tex:"\\downarrow"},{asciimath:"rarr",tex:"\\rightarrow"},{asciimath:">->>",tex:"\\twoheadrightarrowtail"},{asciimath:"larr",tex:"\\leftarrow"},{asciimath:"harr",tex:"\\leftrightarrow"},{asciimath:"rArr",tex:"\\Rightarrow"},{asciimath:"lArr",tex:"\\Leftarrow"},{asciimath:"hArr",tex:"\\Leftrightarrow"},{asciimath:"ast",tex:"\\ast"},{asciimath:"***",tex:"\\star"},{asciimath:"|><",tex:"\\ltimes"},{asciimath:"><|",tex:"\\rtimes"},{asciimath:"^^^",tex:"\\bigwedge"},{asciimath:"vvv",tex:"\\bigvee"},{asciimath:"cap",tex:"\\cap"},{asciimath:"nnn",tex:"\\bigcap"},{asciimath:"cup",tex:"\\cup"},{asciimath:"uuu",tex:"\\bigcup"},{asciimath:"not",tex:"\\neg"},{asciimath:"<=>",tex:"\\Leftrightarrow"},{asciimath:"_|_",tex:"\\bot"},{asciimath:"bot",tex:"\\bot"},{asciimath:"int",tex:"\\int"},{asciimath:"del",tex:"\\partial"},{asciimath:"...",tex:"\\ldots"},{asciimath:"/_\\",tex:"\\triangle"},{asciimath:"|__",tex:"\\lfloor"},{asciimath:"__|",tex:"\\rfloor"},{asciimath:"dim",tex:"\\dim"},{asciimath:"mod",tex:"\\operatorname{mod}"},{asciimath:"lub",tex:"\\operatorname{lub}"},{asciimath:"glb",tex:"\\operatorname{glb}"},{asciimath:">->",tex:"\\rightarrowtail"},{asciimath:"->>",tex:"\\twoheadrightarrow"},{asciimath:"|->",tex:"\\mapsto"},{asciimath:"lim",tex:"\\lim"},{asciimath:"Lim",tex:"\\operatorname{Lim}"},{asciimath:"and",tex:"\\quad\\text{and}\\quad"},{asciimath:"**",tex:"\\ast"},{asciimath:"//",tex:"/"},{asciimath:"\\",tex:"\\,"},{asciimath:"\\\\",tex:"\\backslash"},{asciimath:"xx",tex:"\\times"},{asciimath:"-:",tex:"\\div"},{asciimath:"o+",tex:"\\oplus"},{asciimath:"ox",tex:"\\otimes"},{asciimath:"o.",tex:"\\odot"},{asciimath:"^",tex:"\\hat{}"},{asciimath:"_",tex:"\\_"},{asciimath:"^^",tex:"\\wedge"},{asciimath:"vv",tex:"\\vee"},{asciimath:"nn",tex:"\\cap"},{asciimath:"uu",tex:"\\cup"},{asciimath:"TT",tex:"\\top"},{asciimath:"+-",tex:"\\pm"},{asciimath:"O/",tex:"\\emptyset"},{asciimath:"oo",tex:"\\infty"},{asciimath:":.",tex:"\\therefore"},{asciimath:":'",tex:"\\because"},{asciimath:"/_",tex:"\\angle"},{asciimath:"|~",tex:"\\lceil"},{asciimath:"~|",tex:"\\rceil"},{asciimath:"CC",tex:"\\mathbb{C}"},{asciimath:"NN",tex:"\\mathbb{N}"},{asciimath:"QQ",tex:"\\mathbb{Q}"},{asciimath:"RR",tex:"\\mathbb{R}"},{asciimath:"ZZ",tex:"\\mathbb{Z}"},{asciimath:"->",tex:"\\to"},{asciimath:"or",tex:"\\quad\\text{or}\\quad"},{asciimath:"if",tex:"\\quad\\text{if}\\quad"},{asciimath:"iff",tex:"\\iff"},{asciimath:"*",tex:"\\cdot"},{asciimath:"@",tex:"\\circ"},{asciimath:"%",tex:"\\%"},{asciimath:"boxempty",tex:"\\square"},{asciimath:"lambda",tex:"\\lambda"},{asciimath:"Lambda",tex:"\\Lambda"},{asciimath:"nabla",tex:"\\nabla"},{asciimath:"uparrow",tex:"\\uparrow"},{asciimath:"downarrow",tex:"\\downarrow"},{asciimath:"twoheadrightarrowtail",tex:"\\twoheadrightarrowtail"},{asciimath:"ltimes",tex:"\\ltimes"},{asciimath:"rtimes",tex:"\\rtimes"},{asciimath:"neg",tex:"\\neg"},{asciimath:"partial",tex:"\\partial"},{asciimath:"ldots",tex:"\\ldots"},{asciimath:"triangle",tex:"\\triangle"},{asciimath:"lfloor",tex:"\\lfloor"},{asciimath:"rfloor",tex:"\\rfloor"},{asciimath:"rightarrowtail",tex:"\\rightarrowtail"},{asciimath:"twoheadrightarrow",tex:"\\twoheadrightarrow"},{asciimath:"mapsto",tex:"\\mapsto"},{asciimath:"times",tex:"\\times"},{asciimath:"div",tex:"\\div"},{asciimath:"divide",tex:"\\div"},{asciimath:"oplus",tex:"\\oplus"},{asciimath:"otimes",tex:"\\otimes"},{asciimath:"odot",tex:"\\odot"},{asciimath:"wedge",tex:"\\wedge"},{asciimath:"vee",tex:"\\vee"},{asciimath:"top",tex:"\\top"},{asciimath:"pm",tex:"\\pm"},{asciimath:"emptyset",tex:"\\emptyset"},{asciimath:"infty",tex:"\\infty"},{asciimath:"therefore",tex:"\\therefore"},{asciimath:"because",tex:"\\because"},{asciimath:"lceil",tex:"\\lceil"},{asciimath:"rceil",tex:"\\rceil"},{asciimath:"to",tex:"\\to"},{asciimath:"langle",tex:"\\langle"},{asciimath:"lceiling",tex:"\\lceil"},{asciimath:"rceiling",tex:"\\rceil"},{asciimath:"max",tex:"\\max"},{asciimath:"min",tex:"\\min"},{asciimath:"prod",tex:"\\prod"},{asciimath:"sum",tex:"\\sum"}],this.constants=this.constants.concat(this.relations),this.left_brackets=[{asciimath:"langle",tex:"\\langle"},{asciimath:"(:",tex:"\\langle"},{asciimath:"<<",tex:"\\langle"},{asciimath:"{:",tex:"."},{asciimath:"(",tex:"("},{asciimath:"[",tex:"["},{asciimath:"{",tex:"\\lbrace"},{asciimath:"lbrace",tex:"\\lbrace"}],this.right_brackets=[{asciimath:"rangle",tex:"\\rangle"},{asciimath:":)",tex:"\\rangle"},{asciimath:">>",tex:"\\rangle"},{asciimath:":}",tex:".",free_tex:":\\}"},{asciimath:")",tex:")"},{asciimath:"]",tex:"]"},{asciimath:"}",tex:"\\rbrace"},{asciimath:"rbrace",tex:"\\rbrace"}],this.leftright_brackets=[{asciimath:"|",left_tex:"\\lvert",right_tex:"\\rvert",free_tex:"|"}],this.unary_symbols=[{asciimath:"sqrt",tex:"\\sqrt"},{asciimath:"f",tex:"f",func:!0},{asciimath:"g",tex:"g",func:!0},{asciimath:"sin",tex:"\\sin",func:!0},{asciimath:"cos",tex:"\\cos",func:!0},{asciimath:"tan",tex:"\\tan",func:!0},{asciimath:"arcsin",tex:"\\arcsin",func:!0},{asciimath:"arccos",tex:"\\arccos",func:!0},{asciimath:"arctan",tex:"\\arctan",func:!0},{asciimath:"sinh",tex:"\\sinh",func:!0},{asciimath:"cosh",tex:"\\cosh",func:!0},{asciimath:"tanh",tex:"\\tanh",func:!0},{asciimath:"cot",tex:"\\cot",func:!0},{asciimath:"coth",tex:"\\coth",func:!0},{asciimath:"sech",tex:"\\operatorname{sech}",func:!0},{asciimath:"csch",tex:"\\operatorname{csch}",func:!0},{asciimath:"sec",tex:"\\sec",func:!0},{asciimath:"csc",tex:"\\csc",func:!0},{asciimath:"log",tex:"\\log",func:!0},{asciimath:"ln",tex:"\\ln",func:!0},{asciimath:"abs",rewriteleftright:["|","|"]},{asciimath:"norm",rewriteleftright:["\\|","\\|"]},{asciimath:"floor",rewriteleftright:["\\lfloor","\\rfloor"]},{asciimath:"ceil",rewriteleftright:["\\lceil","\\rceil"]},{asciimath:"Sin",tex:"\\Sin",func:!0},{asciimath:"Cos",tex:"\\Cos",func:!0},{asciimath:"Tan",tex:"\\Tan",func:!0},{asciimath:"Arcsin",tex:"\\Arcsin",func:!0},{asciimath:"Arccos",tex:"\\Arccos",func:!0},{asciimath:"Arctan",tex:"\\Arctan",func:!0},{asciimath:"Sinh",tex:"\\Sinh",func:!0},{asciimath:"Cosh",tex:"\\Cosh",func:!0},{asciimath:"Tanh",tex:"\\Tanh",func:!0},{asciimath:"Cot",tex:"\\Cot",func:!0},{asciimath:"Sec",tex:"\\Sec",func:!0},{asciimath:"Csc",tex:"\\Csc",func:!0},{asciimath:"Log",tex:"\\Log",func:!0},{asciimath:"Ln",tex:"\\Ln",func:!0},{asciimath:"Abs",tex:"\\Abs",rewriteleftright:["|","|"]},{asciimath:"det",tex:"\\det",func:!0},{asciimath:"exp",tex:"\\exp",func:!0},{asciimath:"gcd",tex:"\\gcd",func:!0},{asciimath:"lcm",tex:"\\operatorname{lcm}",func:!0},{asciimath:"cancel",tex:"\\cancel"},{asciimath:"Sqrt",tex:"\\Sqrt"},{asciimath:"hat",tex:"\\hat",acc:!0},{asciimath:"bar",tex:"\\overline",acc:!0},{asciimath:"overline",tex:"\\overline",acc:!0},{asciimath:"vec",tex:"\\vec",acc:!0},{asciimath:"tilde",tex:"\\tilde",acc:!0},{asciimath:"dot",tex:"\\dot",acc:!0},{asciimath:"ddot",tex:"\\ddot",acc:!0},{asciimath:"ul",tex:"\\underline",acc:!0},{asciimath:"underline",tex:"\\underline",acc:!0},{asciimath:"ubrace",tex:"\\underbrace",acc:!0},{asciimath:"underbrace",tex:"\\underbrace",acc:!0},{asciimath:"obrace",tex:"\\overbrace",acc:!0},{asciimath:"overbrace",tex:"\\overbrace",acc:!0},{asciimath:"bb",atname:"mathvariant",atval:"bold",tex:"\\mathbf"},{asciimath:"mathbf",atname:"mathvariant",atval:"bold",tex:"mathbf"},{asciimath:"sf",atname:"mathvariant",atval:"sans-serif",tex:"\\mathsf"},{asciimath:"mathsf",atname:"mathvariant",atval:"sans-serif",tex:"mathsf"},{asciimath:"bbb",atname:"mathvariant",atval:"double-struck",tex:"\\mathbb"},{asciimath:"mathbb",atname:"mathvariant",atval:"double-struck",tex:"\\mathbb"},{asciimath:"cc",atname:"mathvariant",atval:"script",tex:"\\mathcal"},{asciimath:"mathcal",atname:"mathvariant",atval:"script",tex:"\\mathcal"},{asciimath:"tt",atname:"mathvariant",atval:"monospace",tex:"\\mathtt"},{asciimath:"mathtt",atname:"mathvariant",atval:"monospace",tex:"\\mathtt"},{asciimath:"fr",atname:"mathvariant",atval:"fraktur",tex:"\\mathfrak"},{asciimath:"mathfrak",atname:"mathvariant",atval:"fraktur",tex:"\\mathfrak"}],this.binary_symbols=[{asciimath:"root",tex:"\\sqrt",option:!0},{asciimath:"frac",tex:"\\frac"},{asciimath:"stackrel",tex:"\\stackrel"},{asciimath:"overset",tex:"\\overset"},{asciimath:"underset",tex:"\\underset"},{asciimath:"color",tex:"\\color",rawfirst:!0}],this.non_constant_symbols=["_","^","/"]},t.prototype.sort_symbols=function(){var t=function(t,e){return(t=t.asciimath.length)>(e=e.asciimath.length)?-1:t<e?1:0};this.constants.sort(t),this.relations.sort(t),this.left_brackets.sort(t),this.right_brackets.sort(t),this.leftright_brackets.sort(t),this.unary_symbols.sort(t),this.binary_symbols.sort(t)},t.prototype.error=function(t,e){var a=this.source(e).slice(0,5);throw new Error("Error at character "+e+' near "'+a+'": '+t)},t.prototype.literal=function(t){if(t)return{tex:t.token,pos:t.pos,end:t.end,ttype:"literal"}},t.prototype.longest=function(t){return(t=t.filter(function(t){return!!t})).sort(function(t,e){return(t=t.end)>(e=e.end)?-1:t<e?1:0}),t[0]},t.prototype.escape_text=function(t){return t.replace(/\{/g,"\\{").replace(/\}/g,"\\}")},t.prototype.input=function(t){this._source=t,this.brackets=[]},t.prototype.source=function(t,e){return void 0===t&&(t=0),arguments.length>1?this._source.slice(t,e):this._source.slice(t)},t.prototype.eof=function(t){return void 0===t&&(t=0),(t=this.strip_space(t))==this._source.length},t.prototype.unbracket=function(t){if(t){if(!t.bracket)return t;var e=["(",")","[","]","{","}"],a=e.includes(t.left.asciimath),i=e.includes(t.right.asciimath),s=a?"":t.left.tex,r=i?"":t.right.tex,c=t.middle?t.middle.tex:"";return s||r?{tex:"\\left "+(s=s||".")+" "+c+" \\right "+(r=r||"."),pos:t.pos,end:t.end}:{tex:c,pos:t.pos,end:t.end,middle_asciimath:this.source(a?t.left.end:t.pos,i?t.right.pos:t.end)}}},t.prototype.parse=function(t){return this.input(t),this.consume().tex},t.prototype.consume=function(t){void 0===t&&(t=0);for(var e="",a=[];!this.eof(t);){var i=this.expression_list(t);if(!i){var s=this.right_bracket(t);s&&(s.def.free_tex&&(s.tex=s.def.free_tex),i=s);var r=this.leftright_bracket(t);if(r){i=r;var c=this.subsup(r.end);c&&(i={tex:""+i.tex+c.tex,pos:t,end:c.end,ttype:"expression"})}}if(i)e&&(e+=" "),e+=i.tex,t=i.end,a.push(i);else if(!this.eof(t)){var h=this.source(t,t+1);a.push({tex:h,pos:t,ttype:"character"}),e+=h,t+=1}}return{tex:e,exprs:a}},t.prototype.strip_space=function(t){void 0===t&&(t=0);var e=this.source(t),a=e.replace(/^(\s|\\(?!\\))*/,"");return t+e.length-a.length},t.prototype.match=function(t,e){e=this.strip_space(e);var a=t.exec(this.source(e));if(a){var i=a[0];return{token:i,pos:e,match:a,end:e+i.length,ttype:"regex"}}},t.prototype.exact=function(t,e){if(e=this.strip_space(e),this.source(e).slice(0,t.length)==t)return{token:t,pos:e,end:e+t.length,ttype:"exact"}},t.prototype.expression_list=function(t){void 0===t&&(t=0);var e=this.expression(t);if(e){for(var a=e.end,i=e.tex,s=[e];!this.eof(a);){var r=this.exact(",",a);if(!r)break;if(i+=" ,",!(e=this.expression(a=r.end)))break;i+=" "+e.tex,s.push(e),a=e.end}return{tex:i,pos:t,end:a,exprs:s,ttype:"expression_list"}}},t.prototype.expression=function(t){void 0===t&&(t=0);var e=this.negative_expression(t);if(e)return e;var a=this.intermediate_or_fraction(t);if(a){if(this.eof(a.end))return a;var i=this.expression(a.end);return i?{tex:a.tex+" "+i.tex,pos:a.pos,end:i.end,ttype:"expression",exprs:[a,i]}:a}for(var s=0,r=this.non_constant_symbols;s<r.length;s+=1){var c=r[s],h=this.exact(c,t);if(h)return{tex:c,pos:t,end:h.end,ttype:"constant"}}},t.prototype.negative_expression=function(t){void 0===t&&(t=0);var e=this.exact("-",t);if(e&&!this.other_constant(t)){var a=this.expression(e.end);return a?{tex:"- "+a.tex,pos:t,end:a.end,ttype:"negative_expression",dash:e,expression:a}:{tex:"-",pos:t,end:e.end,ttype:"constant"}}},t.prototype.intermediate_or_fraction=function(t){void 0===t&&(t=0);var e=this.intermediate(t);if(e){var a=this.match(/^\/(?!\/)/,e.end);if(a){var i=this.intermediate(a.end);if(i){var s=this.unbracket(e),r=this.unbracket(i);return{tex:"\\frac{"+s.tex+"}{"+r.tex+"}",pos:e.pos,end:i.end,ttype:"fraction",numerator:s,denominator:r}}var c=this.unbracket(e);return{tex:"\\frac{"+c.tex+"}{}",pos:e.pos,end:a.end,ttype:"fraction",numerator:c,denominator:null}}return e}},t.prototype.intermediate=function(t){void 0===t&&(t=0);var e=this.simple(t);if(e){var a=this.subsup(e.end);return a?{tex:""+e.tex+a.tex,pos:t,end:a.end,ttype:"intermediate",expression:e,subsup:a}:e}},t.prototype.subsup=function(t){void 0===t&&(t=0);var e,a,i="",s=t,r=this.exact("_",t);r&&((e=this.unbracket(this.simple(r.end)))?(i=i+"_{"+e.tex+"}",s=e.end):(i+="_{}",s=r.end));var c=this.match(/^\^(?!\^)/,s);if(c&&((a=this.unbracket(this.simple(c.end)))?(i=i+"^{"+a.tex+"}",s=a.end):(i+="^{}",s=c.end)),r||c)return{tex:i,pos:t,end:s,ttype:"subsup",sub:e,sup:a}},t.prototype.simple=function(t){return void 0===t&&(t=0),this.longest([this.matrix(t),this.bracketed_expression(t),this.binary(t),this.constant(t),this.text(t),this.unary(t),this.negative_simple(t)])},t.prototype.negative_simple=function(t){void 0===t&&(t=0);var e=this.exact("-",t);if(e&&!this.other_constant(t)){var a=this.simple(e.end);return a?{tex:"- "+a.tex,pos:t,end:a.end,ttype:"negative_simple",dash:e,expr:a}:{tex:"-",pos:t,end:e.end,ttype:"constant"}}},t.prototype.matrix=function(t){void 0===t&&(t=0);var e=this.left_bracket(t),a=!1;if(!e){if(!(e=this.leftright_bracket(t,"left")))return;a=!0}var i=this.matrix_contents(e.end,a);if(i){var s=a?this.leftright_bracket(i.end,"right"):this.right_bracket(i.end);if(s){var r=i.rows.map(function(t){return t.tex}).join(" \\\\ ");return{tex:"\\left "+e.tex+" "+(i.is_array?"\\begin{array}{"+i.column_desc+"} "+r+" \\end{array}":"\\begin{matrix} "+r+" \\end{matrix}")+" \\right "+s.tex,pos:t,end:s.end,ttype:"matrix",rows:i.rows,left:e,right:s}}}},t.prototype.matrix_contents=function(t,e){void 0===t&&(t=0),void 0===e&&(e=!1);for(var a=[],i=t,s=void 0,r=void 0,c=!1;!this.eof(i)&&!(e?this.leftright_bracket(i):this.right_bracket(i));){if(a.length){var h=this.exact(",",i);if(!h)return;i=h.end}var n=this.match(/^[(\[]/,i);if(!n)return;var o=[],m=[];for(i=n.end;!this.eof(i);){if(o.length){var x=this.exact(",",i);if(!x)break;i=x.end}var p=this.matrix_cell(i);if(!p)break;"column"==p.ttype?(m.push("|"),c=!0,null!==p.expr&&(m.push("r"),o.push(p.expr))):(m.push("r"),o.push(p)),i=p.end}if(!o.length)return;if(void 0===s)s=o.length;else if(o.length!=s)return;var l=this.match(/^[)\]]/,i);if(!l)return;var u=m.join("");if(void 0===r)r=u;else if(u!=r)return;a.push({ttype:"row",tex:o.map(function(t){return t.tex}).join(" & "),pos:n.end,end:i,cells:o}),i=l.end}if(!(void 0===s||s<=1&&a.length<=1))return{rows:a,end:i,column_desc:r,is_array:c}},t.prototype.matrix_cell=function(t){void 0===t&&(t=0);var e=this.exact("|",t);if(e){var a=this.expression(e.end);if(!a)return{ttype:"column",expr:null,pos:e.pos,end:e.end};var i=this.exact("|",a.end);if(!i)return{ttype:"column",expr:a,pos:e.pos,end:a.end};var s=this.expression(i.end);if(s)return{tex:"\\left \\lvert "+a.tex+" \\right \\rvert "+s.text,pos:e.pos,end:s.end,ttype:"expression",exprs:[a,s]}}return this.expression(t)},t.prototype.bracketed_expression=function(t){void 0===t&&(t=0);var e=this.left_bracket(t);if(e){var a=this.expression_list(e.end);if(a){var i=this.right_bracket(a.end)||this.leftright_bracket(a.end,"right");return i?{tex:"\\left"+e.tex+" "+a.tex+" \\right "+i.tex,pos:t,end:i.end,bracket:!0,left:e,right:i,middle:a,ttype:"bracket"}:this.eof(a.end)?{tex:"\\left"+e.tex+" "+a.tex+" \\right.",pos:t,end:a.end,ttype:"bracket",left:e,right:null,middle:a}:{tex:e.tex+" "+a.tex,pos:t,end:a.end,ttype:"expression",exprs:[e,a]}}var s=this.right_bracket(e.end)||this.leftright_bracket(e.end,"right");return s?{tex:"\\left "+e.tex+" \\right "+s.tex,pos:t,end:s.end,bracket:!0,left:e,right:s,middle:null,ttype:"bracket"}:{tex:e.tex,pos:t,end:e.end,ttype:"constant"}}if(!this.other_constant(t)){var r=this.leftright_bracket(t,"left");if(r){var c=this.expression_list(r.end);if(c){var h=this.leftright_bracket(c.end,"right")||this.right_bracket(c.end);if(h)return{tex:"\\left "+r.tex+" "+c.tex+" \\right "+h.tex,pos:t,end:h.end,bracket:!0,left:r,right:h,middle:c,ttype:"bracket"}}}}},t.prototype.right_bracket=function(t){void 0===t&&(t=0);for(var e=0,a=this.right_brackets;e<a.length;e+=1){var i=a[e],s=this.exact(i.asciimath,t);if(s)return{tex:i.tex,pos:t,end:s.end,asciimath:i.asciimath,def:i,ttype:"right_bracket"}}},t.prototype.left_bracket=function(t){void 0===t&&(t=0);for(var e=0,a=this.left_brackets;e<a.length;e+=1){var i=a[e],s=this.exact(i.asciimath,t);if(s)return{tex:i.tex,pos:t,end:s.end,asciimath:i.asciimath,ttype:"left_bracket"}}},t.prototype.leftright_bracket=function(t,e){void 0===t&&(t=0);for(var a=0,i=this.leftright_brackets;a<i.length;a+=1){var s=i[a],r=this.exact(s.asciimath,t);if(r)return{tex:"left"==e?s.left_tex:"right"==e?s.right_tex:s.free_tex,pos:t,end:r.end,ttype:"leftright_bracket"}}},t.prototype.text=function(t){void 0===t&&(t=0);var e=this.match(/^"([^"]*)"/,t);if(e){var a=this.escape_text(e.match[1]);return{tex:"\\text{"+a+"}",pos:t,end:e.end,ttype:"text",text:a}}var i=this.match(/^(?:mbox|text)\s*(\([^)]*\)?|\{[^}]*\}?|\[[^\]]*\]?)/,t);if(i){var s=this.escape_text(i.match[1].slice(1,i.match[1].length-1));return{tex:"\\text{"+s+"}",pos:t,end:i.end,ttype:"text",text:s}}},t.prototype.binary=function(t){void 0===t&&(t=0);for(var e=0,a=this.binary_symbols;e<a.length;e+=1){var i=a[e],s=this.exact(i.asciimath,t),r=i.option?["[","]"]:["{","}"],c=r[0],h=r[1];if(s){var n=this.unbracket(this.simple(s.end));if(n){var o=i.rawfirst?n.middle_asciimath:n.tex,m=this.unbracket(this.simple(n.end));return m?{tex:""+i.tex+c+o+h+"{"+m.tex+"}",pos:t,end:m.end,ttype:"binary",op:i,arg1:n,arg2:m}:{tex:""+i.tex+c+o+h+"{}",pos:t,end:n.end,ttype:"binary",op:i,arg1:n,arg2:null}}return{tex:""+i.tex+c+h+"{}",pos:t,end:s.end,ttype:"binary",op:i,arg1:null,arg2:null}}}},t.prototype.unary=function(t){void 0===t&&(t=0);for(var e=0,a=this.unary_symbols;e<a.length;e+=1){var i=a[e],s=this.exact(i.asciimath,t);if(s){var r=this.subsup(s.end),c=r?r.tex:"",h=this.simple(r?r.end:s.end),n=i.func?h:this.unbracket(h),o=n&&(i.raw?n.middle_asciimath:n.tex);if(i.rewriteleftright){var m=i.rewriteleftright,x=m[0],p=m[1];return n?{tex:"\\left "+x+" "+o+" \\right "+p+" "+c,pos:t,end:n.end,ttype:"unary",op:s,subsup:r,arg:n}:{tex:"\\left "+x+" \\right "+p+" "+c,pos:t,end:s.end,ttype:"unary",op:s,subsup:r,arg:null}}return n?{tex:""+i.tex+c+"{"+o+"}",pos:t,end:n.end,ttype:"unary",op:s,subsup:r,arg:n}:{tex:""+i.tex+c+"{}",pos:t,end:s.end,ttype:"unary",op:s,subsup:r,arg:null}}}},t.prototype.constant=function(t){if(void 0===t&&(t=0),!this.right_bracket(t))return this.longest([this.other_constant(t),this.greek(t),this.name(t),this.number(t),this.arbitrary_constant(t)])},t.prototype.name=function(t){return void 0===t&&(t=0),this.literal(this.match(/^[A-Za-z]/,t))},t.prototype.greek=function(t){void 0===t&&(t=0);var e=new RegExp("^("+this.greek_letters.join("|")+")"),a=this.match(e,t);if(a)return{tex:"\\"+a.token,pos:t,end:a.end,ttype:"greek"}},t.prototype.number=function(t){void 0===t&&(t=0);var e=new RegExp("^\\d+("+this.decimalsign+"\\d+)?");return this.literal(this.match(e,t))},t.prototype.other_constant=function(t){void 0===t&&(t=0);for(var e=0,a=this.constants;e<a.length;e+=1){var i=a[e],s=this.exact(i.asciimath,t);if(s)return{tex:""+i.tex,pos:s.pos,end:s.end,ttype:"other_constant"}}for(var r=0,c=this.relations;r<c.length;r+=1){var h=c[r];if(!h.asciimath.match(/^!/)){var n=this.exact("!"+h.asciimath,t);if(n)return{tex:"\\not "+h.tex,pos:n.pos,end:n.end,ttype:"other_constant"}}}},t.prototype.arbitrary_constant=function(t){if(void 0===t&&(t=0),!this.eof(t)){if(this.exact(",",t))return;for(var e=0,a=this.non_constant_symbols.concat(this.left_brackets.map(function(t){return t.asciimath}),this.right_brackets.map(function(t){return t.asciimath}),this.leftright_brackets.map(function(t){return t.asciimath}));e<a.length;e+=1)if(this.exact(a[e],t))return;var i=this.strip_space(t);return{tex:this.source(i).slice(0,1),pos:t,end:i+1,ttype:"arbitrary_constant"}}},module.exports=t;
//# sourceMappingURL=asciimath2tex.js.map
