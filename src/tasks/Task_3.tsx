import {threeFormula, fourFormula, fiveFormula} from './Formulas'
export default function Task_3(){
    let aNumber: number = -0.5;
    let bNumber: number = 0;
    let ENumber: number = 0.001;
    let xNumber: number = 0;
    let x1Number: number = 0;
    let prev_x: undefined;

    if (fourFormula(bNumber) * fiveFormula(bNumber) > 0){
        do {
            
            xNumber = bNumber - threeFormula(bNumber) / threeFormula(bNumber);
            x1Number = xNumber - threeFormula(xNumber) / threeFormula(xNumber);
            bNumber = x1Number;
            console.log(`${xNumber} ${x1Number}`);

            if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
                console.log("Функція зайшла у нескінченний цикл");
                return;
            };

        } while (Math.abs(x1Number - xNumber) > ENumber){
            
            xNumber = aNumber - threeFormula(aNumber) / threeFormula(aNumber);
            x1Number = xNumber - threeFormula(xNumber) / threeFormula(xNumber);
            aNumber = x1Number;
            console.log(`${xNumber} ${x1Number}`);

            if (typeof prev_x !== 'undefined' && (Math.abs(xNumber - prev_x) < ENumber)){
                console.log("Функція зайшла у нескінченний цикл");
                return;
            };
        };
    }
}
