import errorsData from "../constants/errors-data";

export default function getErrorData(code) {
  if (code === 404) {
    return errorsData[404];
  } else if (code > 499 && code < 599) {
    return errorsData[500];
  }

  return errorsData.default;
}
