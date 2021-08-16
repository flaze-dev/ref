

/**
 * Ref Class
 * @author Ingo Andelhofs
 */
class Ref<T> {

  private _ref?: T;

  public create = (element: T) => {
    this._ref = element;
  }

  public hasElement = (): boolean => {
    return this._ref !== undefined;
  }

  public getElement = (): T => {
    return this._ref!;
  }
}


export default Ref;