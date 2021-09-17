console.log('Welcome to General knowledge Quiz')
console.log('--------------------------------- ')
var readlinesync=require('readline-sync')
console.log("Enter Your Full Name")
var username=readlinesync.question()
console.log('--------------------------------- ')
console.log('welcome\t'+username)
console.log('--------------------------------- ')
console.log('Quiz Description')
console.log('--------------------------------- ')
console.log('1.We will ask 5 Questions of General Knowledege')
console.log('2.You will have 4 Options in each Question')
console.log('3.For every Correct Answer You will get +1 Marks')
console.log('--------------------------------- ')
console.log('Note= Enter a/b/c/d for correct Answer\n')

var score=0 
questionone={
question:'Question1: who is the first president of india?\n\n',
option1:'a) : A.P.J Abdul kalam\n',
option2:'b) : Rajendra prasad\n',
option3:'c) : Pratibha patil\n',
option4:'d) : Ram nath kovind\n'}

questiontwo={
question:'Question2:Who is known as the “Father of India”?\n\n',
option1:'a) : subhash chandra bose\n',
option2:'b) : Rajendra prasad\n',
option3:'c) : Mahatma Gandhi\n',
option4:'d) : Pandit jawaharlal nehru\n'}

questionthree={
question:'Question3:Who won gold medal for India in Olympics 2021?\n\n',
option1:'a) : Neeraj Chopra\n',
option2:'b) : Abhinav Bindra\n',
option3:'c) : Bajrang Punia\n',
option4:'d) : PV Sindhu\n'}

questionfour={
question:'Question4:who is known as missile man of india?\n\n',
option1:'a) : Kailasavadivoo Sivan\n',
option2:'b) : Avul Pakir Jainulabdeen Abdul Kalam\n',
option3:'c) : K. Radhakrishnan\n',
option4:'d) : A. S. Kiran Kumar\n'}

questionfive={
question:'Question5:Which State in India had its Own Constitution?\n\n',
option1:'a) : Madhya Pradesh\n',
option2:'b) : Jammu and Kashmir\n',
option3:'c) : Delhi\n',
option4:'d) : Punjab\n'}

highestscore={
  userone:'saurabh Chawda score=5',
  usertwo:'Shreyash Mahajan  score=4'
}


{
console.log( questionone. question, questionone. option1, questionone. option2, questionone. option3, questionone. option4 )
var userinput=readlinesync.question() 
if (userinput=='b'){
  console.log('Right Answer')
  score=score+1
} else {
  console.log('Wrong Answer')
}
}
{
console.log( questiontwo. question, questiontwo. option1, questiontwo. option2, questiontwo. option3, questiontwo. option4 )
var userinput=readlinesync.question() 
if (userinput=='c'){
  console.log('Right Answer')
  score=score+1
} else {
  console.log('Wrong Answer')
}
}
{
console.log( questionthree. question, questionthree. option1, questionthree. option2, questionthree. option3, questionthree. option4 )
var userinput=readlinesync.question() 
if (userinput=='a'){
  console.log('Right Answer')
  score=score+1
} else {
  console.log('Wrong Answer')
}
}
{
console.log( questionfour. question, questionfour. option1, questionfour. option2, questionfour. option3, questionfour. option4 )
var userinput=readlinesync.question() 
if (userinput=='b'){
  console.log('Right Answer')
  score=score+1
} else {
  console.log('Wrong Answer')
}
}
{
console.log( questionfive. question, questionfive. option1, questionfive. option2, questionfive. option3, questionfive. option4 )
var userinput=readlinesync.question() 
if (userinput=='b'){
  console.log('Right Answer')
  score=score+1
} else {
  console.log('Wrong Answer')
}
}
console.log("---------------------------------")
console.log("Thanks for participating")
console.log('Your Score is = ' +score)
console.log("---------------------------------")
console.log("Highest Score---")
console.log(highestscore. userone)
console.log(highestscore. usertwo)
console.log("\n")
console.log("If you have beaten highest score, then send me the screenshot ")
console.log("---------------------------------")





