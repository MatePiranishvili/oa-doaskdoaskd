// მომხმარებელს შემოატანინეთ რიცხვი და გამოიტანე დადებითია, უარყოფითი თუ ნულის ტოლია.

let num = Number(prompt('enter youre number: '))
if (num === 0){
    console.log('this number is zero ')
}
else if(num > 0){
    console.log('this number is positive')
}


else if(num < 0){
    console.log('this number is negative')
}
