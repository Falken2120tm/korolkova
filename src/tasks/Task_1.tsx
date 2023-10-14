import {threeFormula} from './Formulas'
export default function Task_1(){

    let aNumber: number = -0.5;
    let bNumber: number = 0;
    let ENumber: number = 0.001;
    let xNumber: number = 0;

    while (bNumber - aNumber > ENumber){
        xNumber = (aNumber + bNumber) / 2
        if (threeFormula(aNumber) < 0){
            bNumber = xNumber;
        } else {
            aNumber = xNumber;
        };

        console.log(`${aNumber}, ${bNumber}, ${xNumber}`);
    }
}
