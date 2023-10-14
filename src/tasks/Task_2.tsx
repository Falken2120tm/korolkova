import {threeFormula, fourFormula, fiveFormula} from './Formulas'
export default function Task_2(){
    let aNumber: number = -0.5;
    let bNumber: number = 0;
    let ENumber: number = 0.006;
    let xNumber: number = 0;
    let x1Number: number = 0;
    let prev_x: undefined;

    if (fourFormula(bNumber) * fiveFormula(bNumber) > 0){
        do {

            xNumber = aNumber - ((threeFormula(aNumber) * (bNumber - aNumber)) / ((threeFormula(bNumber) - threeFormula(aNumber))));
            x1Number = xNumber - ((threeFormula(xNumber) * (bNumber - xNumber)) / (threeFormula(bNumber) - threeFormula(xNumber)));
            aNumber = x1Number;

            console.log(`${xNumber} ${x1Number}`);

            if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
                console.log("Функція зайшла у нескінченний цикл");
                return;
            };

        } while (Math.abs(x1Number - xNumber) > ENumber){

            xNumber = aNumber - ((threeFormula(aNumber) * (bNumber - aNumber)) / ((threeFormula(bNumber) - threeFormula(aNumber))));
            x1Number = xNumber - ((threeFormula(xNumber) * (bNumber - xNumber)) / (threeFormula(bNumber) - threeFormula(xNumber)));
            aNumber = x1Number;

            console.log(`${xNumber} ${x1Number}`);

            if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
                console.log("Функція зайшла у нескінченний цикл");
                return;
            };

        }
    } else {

        do {

            xNumber = bNumber - ((threeFormula(bNumber) * (bNumber - aNumber)) / ((threeFormula(bNumber) - threeFormula(aNumber))));
            x1Number = xNumber - ((threeFormula(xNumber) * (xNumber - aNumber)) / (threeFormula(xNumber) - threeFormula(aNumber)));
            bNumber = x1Number;

            console.log(`${xNumber} ${x1Number}`)

            if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
                console.log("Функція зайшла у нескінченний цикл і повинна бути зупинена");
                return;
            };

        } while (Math.abs(x1Number - xNumber) > ENumber){

            xNumber = bNumber - ((threeFormula(bNumber) * (bNumber - aNumber)) / ((threeFormula(bNumber) - threeFormula(aNumber))));
            x1Number = xNumber - ((threeFormula(xNumber) * (xNumber - aNumber)) / (threeFormula(xNumber) - threeFormula(aNumber)));
            bNumber = x1Number;

            console.log(`${xNumber} ${x1Number}`)

            if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
                console.log("Функція зайшла у нескінченний цикл і повинна бути зупинена");
                return;
            };
        }
    }
}
