import { ValidationError } from "class-validator"

export function displayValidationErrors(validationErrors: ValidationError[]){
    if(validationErrors && validationErrors.length > 0) {
        const errors = validationErrors.map((v, i) => {
            return {
              property: v.property,
              constrains: [
                ...iterateConstrains(v.constraints)
              ]
            }
        })
        return errors;
    }
}

function iterateConstrains(constrains: any) {
    const arr = [];
    if(constrains !== null) {
        for(let key in constrains) {
            arr.push(constrains[key]);
        }
    }
    return arr;
}