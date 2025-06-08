declare module "poly-decomp" {
  interface PolyDecomp {
    decomp(
      vertices: Array<{ x: number; y: number }>
    ): Array<Array<{ x: number; y: number }>>;
    quickDecomp(
      vertices: Array<{ x: number; y: number }>
    ): Array<Array<{ x: number; y: number }>>;
    isSimple(vertices: Array<{ x: number; y: number }>): boolean;
    removeCollinearPoints(
      vertices: Array<{ x: number; y: number }>,
      precision?: number
    ): void;
    makeCCW(vertices: Array<{ x: number; y: number }>): void;
  }
  const polyDecomp: PolyDecomp;
  export default polyDecomp;
}
