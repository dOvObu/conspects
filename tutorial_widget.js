// Based on code on page https://github.com/jfine2358/scratch/blob/latex-type-tutor/_/index.js
var solutions = {"data": {}, "ptr": -1};

window.MathJax = {
    "fast-preview": {
        diabled: true
    },
    AuthorInit: function () {
        MathJax.Hub.Register.StartupHook('End', function () {
            MathJax.Hub.processSectionDelay = 0;
            next();
            var answer = document.getElementById('answer_input');
            var answer_render = document.getElementById('answer_render');
            var jax = MathJax.Hub.getAllJax(answer_render)[0];
            answer_input.addEventListener('input', function () {
                MathJax.Hub.Queue(['Text', jax, answer.value])
            })
        })
    }
};


solutions.ptr = -1;

var next = function () {
    if (window.solutions.data === undefined || window.solutions.ptr == -2) return;

    if (window.solutions.ptr >= 0) {
        var score_locator = document.getElementById('score_locator');
        var score = parseInt(score_locator.innerText);

        var current_input = document.getElementById('answer_input').value;
        var valid_input = window.solutions.data[window.solutions.ptr];
        var result = document.getElementById('answer_result');

        if (current_input.replace(/\s/g, '') == valid_input['answer'].replace(/\s/g, '')) {
            ++score;
            result.innerText = '';
        } else {
            --score;
            result.innerText = '\n\nна вопрос:\n\t' + valid_input['question']
                + '\n\nверным был бы ответ:\n\t' + valid_input['answer'];
        }
        score_locator.innerText = score.toString();
    }

    window.solutions.ptr = (window.solutions.ptr + 1) % window.solutions.data.length;
    var solution = window.solutions.data[window.solutions.ptr]['question'];
    //document.getElementById('solution_show').innerText = solution;

    var answer_render = document.getElementById('answer_render');
    var solution_render = document.getElementById('solution_render');
    var jax = MathJax.Hub.getAllJax(solution_render)[0];
    var update_height = function () {
        answer_render.style.height = solution_render.offsetHeight;
    }
    MathJax.Hub.Queue(['Text', jax, solution], [update_height]);

    document.getElementById('answer_input').value = '';
    document.getElementById('answer_input').dispatchEvent(
        new Event('input', {bubbles: true})
    );
    document.getElementById('answer_input').focus();
};

function loadJSON(url, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

loadJSON('questions.json', function (response) {
    var json = JSON.parse(response);
    var json_is_empty = json.length == 0;

    if (json_is_empty) {
        window.solutions.ptr = -2;
        var questions_form = document.getElementById('questions');
        questions_form.removeChild(questions_form.childNodes[0]);
    } else {
        window.solutions = {"data": json[document.title]};
        window.solutions.ptr = -1;
    }
})

document.getElementById('form').onsubmit = next;
