export class Library {
  private _map: {[key: string]: any} = {};

  public add(...modules: [string, any][]) {
    for (const svgModule of modules) {
      this._map[svgModule[0]] = svgModule[1];
    }
  }

  public get(key: string): any {
    if (!this._map[key]) throw new Error(`${key} is not defined. Please add module in library.`);
    return this._map[key];
  }

  public keys(): string[]{
    return Object.keys(this._map);
  }
}