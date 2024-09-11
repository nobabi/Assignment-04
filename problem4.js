

/*
রাকিব একটি সফটওয়্যার কোম্পানিতে প্রোগ্রামার হিসেবে কাজ করছেন। 
তার ছোট ভাই, রাজিব, একটি বিখ্যাত বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষা দিয়েছে। ভর্তি পরীক্ষার ফলাফল বিভিন্ন মানদণ্ডের উপর ভিত্তি করে নির্ধারিত হবে। 
রাজিবের পরীক্ষার স্কোর,
 স্কুলের গ্রেড,
  এবং অভিভাবকের প্রোফেশন (যদি "farmer" হয়) সবকিছু মিলিয়ে তার ফাইনাল স্কোর বের করতে হবে।
  
  তুমি যেহেতু রাকিবের সহকর্মী এবং ভালো প্রোগ্রামার, তাই রাকিব চায় তুমি একটি ফাংশন calculateFinalScore() বানিয়ে দাও, 
  যা রাজিবের বিভিন্ন তথ্য ইনপুট হিসেবে নিয়ে ফাইনাল স্কোর বের করবে। ফাইনাল স্কোর যদি ৮০ বা তার বেশি হয়, তাহলে সে ভর্তি হতে পারবে। অন্যথায়, সে ভর্তি হতে পারবে না। 
Scoring Criteria
1.	Test Score: সর্বাধিক ৫০ পয়েন্ট
2.	School Grade: সর্বাধিক ৩০ পয়েন্ট
3.	Parent Profession: যদি "farmer" হয়, ২০ পয়েন্ট

Input :  একটি অব্জেক্ট ইনপুট হিসেবে নেবে।  অবজেক্ট এ অবশ্যই name,  testScore, schoolGrade, isFFamily প্রোপার্টি গুলো থাকবে।  যেখানে 
typeof name = string 
typeof testScore= number ( testScore <= 50) 
typeof schoolGrade = number ( schoolGrade <=30) 
typeof  isFFamily = boolean

Output :  এটা রিটার্ন করবে একটা বুলিয়ান ভ্যালু : true / false

Challenge 📢:  যদি ইনপুট টি অব্জেক্ট না হয় তাহলে একটি এরর মেসেজ দেবে একটি  "Invalid Input"


*/
function calculateFinalScore(obj)
{
    if(typeof obj !=='object' || typeof obj===null)
    {
        return ("Invalid Input");
    }

    if(obj.testScore>50 || obj.schoolGrade>30)
    {
        return (`"Check Your test and schoolGrade score "`)
    }


    let total_score= obj.testScore+obj.schoolGrade;

    if(obj.isFFamily)
    {
        total_score =total_score+20;
    }

    return total_score>=80;
}

const person1 ={ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }

const person2 ={ name: "Rajib", testScore: 100,  schoolGrade: 60, isFFamily : false }
const person3 ={ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
// console.log(calculateFinalScore(person1));
console.log(calculateFinalScore(person2));
// console.log(calculateFinalScore([1,2,3]));
// console.log(calculateFinalScore(person3));
// console.log(calculateFinalScore("hello"));