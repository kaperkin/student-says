"use strict";
var quotes = [
    {
        story: '"I\'ve never ridden a Unicorn!"',
        student: "Naomi",
        grade: 'Kindergarten'
    },
    {
        story: '"Mrs. Kelly, when will we learn how to make e into an mc?"',
        student: "Theresa",
        grade: 3
    },
    {
        story: 'I had a student say "I have a very close die date"... He wanted to say "I have a tight deadline"',
        student: 'Gonzalo',
        grade: 'Adult English Learner'
    },
    {
        story: '"Me to student: "no comments from the peanut gallery!" Student: "can I be in the cashew gallery instead? I love cashews!"',
        student: "Matthew",
        grade: 7
    },
    {
        story: 'I had to walk with a cane after injuring my knee. Student: "Mrs. Hamilton, don\'t you worry that this means you\'re getting older?" ',
        student: "Max",
        grade: 7
    },
    {
        story: ' I was copying a definition from Wikipedia and all my students said "Mrs. Hamilton you need to cite your sources, and you said never to use Wikipedia!"',
        student: "Andrew",
        grade: 8
    },
    {
        story: 'Student had a phone call from his mom saying he had lost his key, so she was picking him up after school. ' +
        'I relayed the message and then Max says "it\'s okay, you can use my key!" When the students all look at him funny he says ' +
        '"aren\'t all house keys the same? Like they open all houses?"',
        student: "Max",
        grade: 7
    },
    {
        story: 'I let the students have free time on Fridays as a reward for good behavior and getting homework done. ' +
        'Today a student walked up to me and held up his lttle project he was working on. He was so excited about it. ' +
        'He exclaimed "Mrs. Kelley I just invented paper underwear! " I didn\'t have the heart to point out the flaw in his design.',
        student: 'Jayden',
        grade: 7
    }
];
(function () {
    var story = document.getElementById("story");
    var student = document.getElementById("student");

    function init() {
        document.getElementById("btn").addEventListener("click", studentSays);
        document.getElementById("tweet-quote").addEventListener("click", tweetThis);
        studentSays();

    }

    function studentSays() {
        var randomNum = Math.floor(Math.random() * quotes.length);
        var studentGrade = "<span>Grade ";
        var studentNameAge = "- " + quotes[randomNum].student + ", ";

        if (Number(quotes[randomNum].grade)) {
            studentGrade += quotes[randomNum].grade;
        } else {
            studentGrade = "<span>" + quotes[randomNum].grade;
        }
        studentGrade += "</span>";

        story.innerHTML = quotes[randomNum].story;
        student.innerHTML = studentNameAge + studentGrade;
    }

    function tweetThis() {
        var url = "https://twitter.com/intent/tweet?text=" + story.innerHTML + student.innerHTML + "&hashtags=studentSays";
        return window.open(url);
    }

    document.addEventListener("DOMContentLoaded", init);
})();