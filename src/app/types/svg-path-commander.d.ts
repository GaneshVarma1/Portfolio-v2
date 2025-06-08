declare module "svg-path-commander" {
  export default class SVGPathCommander {
    constructor(path: string);
    getTotalLength(): number;
    getPointAtLength(length: number): { x: number; y: number };
  }
}
