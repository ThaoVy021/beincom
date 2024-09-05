export default function cleanUndefinedFields(obj: any): any {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
}
