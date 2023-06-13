export function getAddUp(arg0: number, arg1: number) {
    let result = {};
    result["result"] = arg0 + arg1;
    return result;
}


export function getSubtraction(arg0: number, arg1: number) {
    let result = {};
    result["result"] = arg0 - arg1;
    return result;
}


export function getMultiply(arg0: number, arg1: number) {
    let result = {};
    let tmpResult: number = 0;

    for (let index = 0; index < arg0; index++) {
        tmpResult += arg1;
    }

    result["result"] = tmpResult;
    return result;
}


export function getDevide(arg0: number, arg1: number) {
    let result = {};
    let tmpResult: number = 0;
    if (arg1 == 0) {
        result["result"] = "arg1 cann't be zero!";
    } else {
        if (arg0 >= arg1) {
            do {
                tmpResult++;
                arg0 -= arg1;
            } while (arg0 >= arg1);

            result["result"] = tmpResult;
        } else {
            result["result"] = 0;
        }
    }
    return result;
}
