"use strict";
(function () {
  var quotes = [
    {
      story: '(while crying) "I\'ve never ridden a Unicorn!"',
      student: "Naomi",
      grade: 'Kindergarten'
    },
    {
      story: '"Mrs. Kelly, when will we learn how to make e into an mc?"',
      student: "Theresa",
      grade: 3
    },
    {
      story: '"I have a very close die date"... He wanted to say "I have a tight deadline"',
      student: 'Gonzalo',
      grade: 'Adult English Learner'
    },
    {
      story: '"Me to students: "no comments from the peanut gallery!" Matthew: "can I be in the cashew gallery instead? I love cashews!"',
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
      grade: 2
    },
    {
      story: '"Ms. K, cats love me. They always come to my house when I\'m home and are like "Heeeey Vanessa what\'s up?"',
      student: "Vanessa",
      grade: "Kindergarten"
    },
    {
      story: 'Jake: "Ms. K!!! I think Josh is going to womit!" Me: "He\'s going to what?" Jake: "WOMIT!" I look over at Josh who is vomiting on the rug. Jake: "Ms. K I think he wommited already."Me: "Yes I think he did vomit Jake... Thank you."',
      student: "Jake",
      grade: "Kindergarten"
    },
    {
      story: 'Ray: "Ms. K I can see your pussy." Me: "You can see what?!?!?" Ray: "I can see your purse-y." As he points to my purse.',
      student: "Ray",
      grade: "Kindergarten"
    },
    {
      story: '"Teacher please tell me your secret, your secret is safe with me"',
      student: "Emmanuel",
      grade: "Preschool"
    },
    {
      story: ' I wasn\'t certain if the student understood the word when she used the vocabulary word embrace in the sentence..."The girl broke her leg so the doctor\'s gave her an embrace."',
      student: 'Amya',
      grade: 2
    },
    {
      story: 'I wore a shirt with a picture of a Jack-o-Lantern on it for Halloween. Myles: "Spooooooky!", he says as he reaches forward and firmly squeezes the Jack-o-Lantern',
      student: 'Myles',
      grade: 'Preschool'
    },
    {
      story: ' I hear from across the room: "I\'M RAISING MY HAND!!!" Kind of defeating the purpose of quietly raising his hand...',
      student: 'Tony',
      grade: 6
    },
    {
      story: 'Overheard after a game of dodgeball at recess: Abdul: "Wow! Max, you came up with a GREAT plan! What was it again?" Max: "To go out there and throw the balls!" Abdul: "Yeah, that was it! That was a great plan!"',
      student: "Abdul and Max",
      grade: 4
    },
    {
      story: 'Teacher: "Don\'t steal my coffee or I\'ll become" Cathy: "-a raisin!" (I was going to say "cranky")',
      student: 'Cathy',
      grade: 'Kindergarten'
    },
    {
      story: 'We are studying figurative language and I was giving examples of similes. Mrs. Hamilton: "I\'m as cranky as a lion in a cage." Jenny: "Mrs. Hamilton, is this portable your cage?" Mrs. Hamilton: "Yes, yes it is..."',
      student: 'Jenny',
      grade: 7
    },
    {
      story: 'Mary(gestures wildly to group of three boys): "Look how many guy friends I have!" Teresa: "Wow! That\'s a lot!"',
      student: 'Mary',
      grade: 3
    },
    {
      story: 'An 8th grader poses for a picture wearing a tiny stick-on mustache and standing in the Nazi salute Teacher:"Your future self says not to post that picture anywhere" A look of horror and realization spread across his face... Austin:"Hey Reece! Come back here and delete that!"',
      student: 'Austin',
      grade: 8
    },
    {
      story: 'One kid whom I have carefully built a great relationship over the course of this year wasn\'t doing his work (not unusual for him). I told him he had to write something on his paper. He held it up a couple of minutes later and his answer was just the word "something". He says "see, I wrote \'something\' on my paper!"',
      student: 'Jim',
      grade: 7
    },
    {
      story: 'Today, a crying 5 year old told me "I am crying because my blanket isn\'t a taco" Teacher to self: Story of my life, kid.',
      student: 'Dianna',
      grade: 'Kindergarten'
    }
  ];
  var usedQuotes = [];
  var story = document.getElementById("story");
  var student = document.getElementById("student");
  var grade = document.getElementById("grade");
  var startOverContainer = document.getElementById("startOverContainer");
  var contentItem = document.getElementsByClassName("contentItem");


  function init() {
    document.getElementById("btn").addEventListener("click", studentSays);
    document.getElementById("tweet-quote").addEventListener("click", tweetThis);
    document.getElementById("startOver").addEventListener("click", startOver);
    studentSays();
  };

  function studentSays() {
    if(quotes.length > 0){
      var randomNum = Math.floor(Math.random() * quotes.length);
      var quote = quotes[randomNum];
      var studentGrade = "<span> &nbsp;grade ";
      var studentNameAge = "- " + quote.student;
      usedQuotes.push(quotes.splice(randomNum,1)[0]);

      if (Number(quote.grade)) {
        studentGrade += quote.grade;
      } else {
        studentGrade = "<span> &nbsp;" + quote.grade;
      }
      studentGrade += "</span>";

      story.innerHTML = quote.story;
      student.innerHTML = studentNameAge;
      grade.innerHTML = studentGrade;
    }else{
      for(var i=0; i<contentItem.length; i++){
        contentItem[i].style.display = "none";
      }
      startOverContainer.style.display = "inline";
      for(var i=0; i<usedQuotes.length; i++){
        quotes.push(usedQuotes[i]);
      }
      usedQuotes = [];
    };
  };

  function tweetThis() {
    var url = "https://twitter.com/intent/tweet?text=" + story.innerHTML + student.innerHTML + "&hashtags=studentSays";
    return window.open(url);
  };

  function startOver(){
    for(var i=0; i<contentItem.length; i++){
      contentItem[i].style.display = "inline";
    }
    startOverContainer.style.display = "none";
    studentSays();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
