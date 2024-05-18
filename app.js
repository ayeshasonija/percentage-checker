var percentage = +prompt()

if(percentage >= 80 && percentage <= 100){
    console.log("A+ grade")
}else if( percentage >=70 && percentage <= 79){
    console.log("A grade")
}else if( percentage >= 60 && percentage <=69){
    console.log("B grade")
}else if(percentage >= 50 && percentage <=59){
    console.log("C grade")
}else if( percentage <= 40 && percentage >= 1){
    console.log("fail")
}else{
    console.log("out of range")
}