

type CreateCallback<E, D> = ({element, setData}: {element: E, setData: (data: D) => void}) => void;


/**
 * Refs Class
 * @author Ingo Andelhofs
 */
class Refs<E, D> {

  private refs: Map<string, {element?: E, data?: D}>;

  public constructor() {
    this.refs = new Map();
  }

  public create = (key: string, callback?: CreateCallback<E, D>) => {
    return (element: E) => {
      callback?.({element, setData: (data: D) => this.setData(key, data)});

      const prev = this.refs.get(key) ?? {};
      this.refs.set(key, {...prev, element});
    }
  }

  public setData = (key: string, data: D) => {
    const prev = this.refs.get(key) ?? {};
    this.refs.set(key, {...prev, data});
  }

  public getData = (key: string) => {
    return this.refs.get(key)?.data;
  }

  public has = (key: string): boolean => {
    return this.refs.has(key);
  }

  public get = (key: string): E => {
    return this.refs.get(key)?.element!;
  }
}

export default Refs;