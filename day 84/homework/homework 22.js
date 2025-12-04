// მომხმარებელს შემოატანინე ორი რიცხვი და შეამოწმე, ორივე დადებითია თუ არა და მათი ჯამი მეტია 100-ზე.


let num = Number(prompt('enter youre number'))
let num1 = Number(prompt('enter youre 2nd number'))
if(num > 0 && num1 > 0 && num+num1 > 100){
    console.log('nice job')
}