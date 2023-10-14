import {oneFormula, twoFormula} from './Formulas'
export default function Task_4(){
    let aNumber: number = -0.5;
    let bNumber: number = 0;
    let ENumber: number = 0.001;
    let xNumber: number = 0;
    let x1Number: number = 0;
    let prev_x: undefined;
    let qNumber: number = 0;
    let rNumber: number = 0;

    if (twoFormula(aNumber) > twoFormula(bNumber)){
        qNumber = twoFormula(aNumber);
    } else {
        qNumber = twoFormula(bNumber);
    }

    rNumber = qNumber

    do {
        
        xNumber = oneFormula(rNumber);
        x1Number = oneFormula(xNumber);
        rNumber = x1Number;
        console.log(`${xNumber} ${x1Number}`);

        if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
            console.log("Функція зайшла у нескінченний цикл");
            return;
        };

    } while (Math.abs(x1Number - xNumber) > ENumber){

        xNumber = oneFormula(rNumber);
        x1Number = oneFormula(xNumber);
        rNumber = x1Number;
        console.log(`${xNumber} ${x1Number}`);

        if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
            console.log("Функція зайшла у нескінченний цикл");
            return;
        };
    };
}
