// 2. შექმენით კალკულატორი, მომხმარებელს უნდა შემოატანინოთ ორი რიცხვი და მოქმედება და შედეგი გამოიტანოთ alert-ში.

let num1 = Number(prompt ('Enter youre first number') )
let num2 = Number(prompt ('Enter youre second number') )
let calculator = prompt ('Enter Matematical operator')

if (calculator === '+' ){
    alert(num1 + num2)
}

else if (calculator === '*'){
    alert(num1 * num2)
}


else if(calculator === '/'){
    alert(num1 / num2)
}


else if(calculator === '-'){
    alert(num1 - num2)
}
