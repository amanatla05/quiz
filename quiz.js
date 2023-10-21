$(document).ready(function () {
    const questions = [
        {
            question: "How many elements are in the periodic table?",
            options: ["120", "110", "118", "78"],
            correctAnswer: 2,
        },
        {
            question: "Which planet in the Milky Way is the hottest?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correctAnswer: 2,
        },
        {
            question: "Aureolin is a shade of what color?",
            options: ["Red", "Yellow", "Black", "Green"],
            correctAnswer: 1,
        },
    ];

    let currentQuestion = 0;
    let score = 0;

    function displayQuestion() {
        const questionObj = questions[currentQuestion];
        $("#question").text(questionObj.question);
        $("#options-container").empty();
        for (let i = 0; i < questionObj.options.length; i++) {
            const $option = $("<button>", {
                text: questionObj.options[i],
                class: "option",
                click: function () {
                    checkAnswer(i, questionObj.correctAnswer);
                },
            });
            $("#options-container").append($option);
        }
        $("#feedback-container").hide();
    }

    function checkAnswer(selectedIndex, correctIndex) {
        const questionObj = questions[currentQuestion];
        $(".option").prop("disabled", true);

        if (selectedIndex === correctIndex) {
            $("#feedback").addClass("correct").text("Correct!");
            score++;
        } else {
            $("#feedback").addClass("incorrect").html(`Incorrect. The correct answer is: <span class="correct">${questionObj.options[correctIndex]}</span>`);
        }
        $("#feedback-container").show();
        $("#next-button").show();
    }

    $("#next-button").click(function () {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
            $("#next-button").hide();
            $(".option").prop("disabled", false);
            $("#feedback").removeClass("correct incorrect");
        } else {
            $("#quiz-container").html(`<p>You scored ${score} out of ${questions.length} questions.</p>`);
        }
    });

    displayQuestion();
    $("#next-button").hide();
});
