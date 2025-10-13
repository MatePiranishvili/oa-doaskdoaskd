// მომხმარებელს შემოატანინეთ ასაკი და შეამოწმეთ, თუ რიცხვი
//  ნაკლებია 18-ზე მაშინ კონსოლში გამოიტანეთ 'ჯერ არასრულწლოვანი ხარ' სხვა დანარჩენ შემთხვევაში 'შენ ზრდასრული ხარ'


let num1 = Number(prompt('Enter youre age : '))
if (num1 <= 18){
    console.log('you are under 18')
}
else{
    console.log('you are an adult')
}