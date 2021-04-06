import { Validator } from "./Validators/ValidatorType";

/*====================*/

type ValidationResult = Array<string> | undefined;

/*====================*/

export default function runValidators(
  value: string,
  validators: Array<Validator>
): ValidationResult {
  const errors = [];

  for (let validator of validators) {
    const error = validator(value);
    if (error) {
      errors.push(error);
    }
  }

  return errors.length ? errors : undefined;
}
