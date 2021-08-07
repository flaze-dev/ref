

/**
 * Ref Class
 * @author Ingo Andelhofs
 */
class Ref<T> {

  private ref?: T;

  public create = (element: T) => {
    this.ref = element;
  }

  public has = (): boolean => {
    return this.ref !== undefined;
  }

  public get = (): T => {
    return this.ref!;
  }
}


export default Ref;