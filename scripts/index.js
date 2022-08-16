// Create and display a variable:
var qaList = [];

const delay = ms => new Promise(res => setTimeout(res, ms));

function loadQA(q, a) {
    var obj = {
        question: q,
        answer: a,
    };
    return obj
}

function callQA() {
    var question = document.getElementById("question").value;
    var answer = document.getElementById("answer").value;
    var qaObj = loadQA(question, answer);
    qaList.push(qaObj);
    document.getElementById("question").value = '';
    document.getElementById("answer").value = '';
    document.getElementById('formMessage').innerHTML = `Data loaded to QA Array. System now holding ${qaList.length} QA objects.`;
}

async function qaDisplay(){
    let i = 0
    do {
        document.getElementById('questionArea').innerHTML = `Question: ${qaList[i].question}`;
        document.getElementById('answerArea').innerHTML = `Answer: ${qaList[i].answer}`;
        await delay(3000);
        i++;
    } while (i < qaList.length);
    document.getElementById('answerArea').innerHTML = '';
    document.getElementById('questionArea').innerHTML = 'Display Finish!';
}