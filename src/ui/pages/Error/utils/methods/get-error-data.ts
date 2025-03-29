import errorsData from "../constants/errors-data";

type TErrorData = Readonly<{
  errorMessage: string;
  linkMessage: string;
}>;

export default function getErrorData(code: number): TErrorData {
  if (code === 404) {
    return errorsData[404];
  } else if (code > 499 && code < 599) {
    return errorsData[500];
  }

  return errorsData.default;
}
