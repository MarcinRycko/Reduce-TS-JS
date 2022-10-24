function mapFn<T, U>(
  array: T[],
  callback: (item: T, index: number, array: T[]) => U
): U[] {
  return array.reduce((output: U[], item, index, array) => {
    output.push(callback(item, index, array));
    return output;
  }, []);
}

function filterFn<T>(
  array: T[],
  callback: (item: T, index?: number, array?: T[]) => boolean
): T[] {
  return array.reduce((output: T[], item, index, array) => {
    if (callback(item, index, array)) output.push(item);
    return output;
  }, []);
}

function everyFn<T>(
  array: T[],
  callback: (item: T, index?: number, array?: T[]) => boolean
): boolean {
  return array.reduce((output: boolean, item, index, array) => {
    if (!callback(item, index, array)) {
      output = false;
      array.splice(1);
    }
    return output;
  }, true);
}

function someFn<T>(
  array: T[],
  callback: (item: T, index?: number, array?: T[]) => boolean
): boolean {
  return array.reduce((output: boolean, item, index, array) => {
    if (callback(item, index, array)) {
      output = true;
      array.splice(1);
    }
    return output;
  }, false);
}

export { mapFn, filterFn, everyFn, someFn };
