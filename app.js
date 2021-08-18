//                 QUESTION#01
// var dtae =new Date()
// document.write(dtae)
// //                 QUESTION#02
// var date=new Date()
// day=date.getDay()
// daynames=["sun","mon","tue","wed","turs","fri","sat"]
// console.log(daynames[day])
//                 QUESTION#03
// var date=new Date()
// var day=date.getDay()
// var daynames=["sunday","Mionday","tuesady","wednessada","rtheurs","freishad","satried"]
// var a=daynames[day]
// var b=a.slice(0,3)
// console.log(b)
//                 QUESTION#04
// var date=new Date()
// var day=date.getDay()
// if((day==0)||(day==6)){
// console.log("fun day",day)}
// else{
//     console.log("its working day")
// }
//                 QUESTION#05
// var date=new Date()
// console.log(date)
// var day=date.getDate()
// console.log(day)
// if(day<16){
// console.log("First fifteen days of the month"),day}
// else{
//     console.log("Last days of the month")
// }
//                 QUESTION#06
// var sinceDate=new Date("January 1,1970 00:00:00")
// var uptoDate= new Date()
// var dateSinceDate=sinceDate.getTime()
// var dateUptoDate=uptoDate.getTime()
// var duration=(dateUptoDate-dateSinceDate)
// console.log(duration)
//                 QUESTION#07
// var time=new Date()
// var curhrs=time.getHours()
// if(curhrs>=13){
//     document.write("its P.M")
// }else{
//     document.write("its A.M")
// }
//                 QUESTION#08
// var LaterDate=new Date("December 31, 2020 00:00:00")
// console.log(LaterDate)
//                 QUESTION#09
// var uptodate=new Date()
// var sinceDate=new Date("july 9, 2021 ")
// var dayuptodate=uptodate.getTime()
// var daysinceDate=sinceDate.getTime()
// var duration=(dayuptodate-daysinceDate)/(1000*60*60*24)
// var round=Math.round(duration)
// console.log(round)
//                 QUESTION#10
// var uptodate=new Date()
// var sinceDate=new Date("January 1, 2015")
// var secuptodate=uptodate.getTime()
// var secsinceDate=sinceDate.getTime()
// var totalSec=(secuptodate-secsinceDate)/(1000)
// var round=Math.round(totalSec)
// console.log(round)
                // QUESTION#11
// var uptoHours=new Date()
// console.log(uptoHours)
// var a=uptoHours.getHours()
// console.log(a)
// var b=(a-1)
// var sinceDate=uptoHours.setHours(b)
// console.log(uptoHours)
                // QUESTION#12
// var uptoDate=new Date()
// var a=uptoDate.getFullYear()
// var b=a-100
// var sinceDate=uptoDate.setFullYear(b)
// console .log(uptoDate)
                // QUESTION#13
// var dob=+prompt("Enter your age")
// var date=new Date()
// var a=date.getFullYear()
// var b=a-dob
// var updatedDob=date.setFullYear(b)
// console.log(b)
                // QUESTION#14
// var cuName=prompt("Enter your name")
// var uptodate=new Date()
// var month=uptodate.getMonth()
// var monthNames=["Jan","Feb","Mar","Apr","May","June","July","August","Sep","Oct","Nov","Dec"]
// var updatedMonth=monthNames[month]
// var nou=410
// var puc=16
// var napwdd=nou*puc
// var lps=350
// var gapadd=napwdd+lps
// document.write(cuName,"<br/>",
//                 updatedMonth,"<br/>",
//                 nou,"<br/>",
//                 puc,"<br/>",
//                 napwdd,"<br/>",
//                 lps,"<br/>",
//                 gapadd)