export function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
