const Survey ={
    questions: [
        {q: "I love to listen to lofi and vaporwave music, especially when I'm working or studying",
         number: 1},
        {q: "Most of my hobbies are outdoor hobbies",
         number: 2},
        {q: "I believe that experiences are more important than material things",
        number: 3},
        {q: "I am very needy and prefer friends who can always hang out with me at a moment's notice",
        number: 4},
        {q: "I am physically affectionate",
        number: 5},
        {q: "I love trying new things",
        number: 6},
        {q: "I prefer activities with lots of people and consider myself an extrovert",
        number: 7},
        {q: "It is important to confide in friends and to share your feelings",
        number: 8},
        {q: "I would much rather spend time with my friends in person rather than online",
        number: 9},
        {q: "I tend to be super flaky or late to gatherings with friends",
        number: 10}
    ],

    loadQuestions(){
        this.questions.forEach(e => $("#survey").append(`
            <div class="question">
                <label>${e.q}</label><br>
                <input type="radio" name="answer${e.number}" value=1>1
                <input type="radio" name="answer${e.number}" value=2>2
                <input type="radio" name="answer${e.number}" value=3>3
                <input type="radio" name="answer${e.number}" value=4>4
                <input type="radio" name="answer${e.number}" value=5>5
            </div>
        `));
        $("#survey").append(`<input id="yeet" type="submit" value="Find a New Friend!">`)
    }
}

Survey.loadQuestions();
