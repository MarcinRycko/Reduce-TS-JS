function mapFn<T>(array: T[], callback: (item: T, index?: number, copyArray?: T[]) => T ): T[] {
  const copyArray: T[] = [...array];
  return copyArray.reduce((output: T[], item, index, copyArray) => {
    output.push(callback(item, index, copyArray));
    return output;
  }, []);
}

function filterFn<T>(array: T[], callback: (item: T, index?: number, copyArray?: T[]) => boolean ) : T[] {
  const copyArray: T[] = [...array];
  return copyArray.reduce((output: T[], item, index, copyArray) => {
    if (callback(item, index, copyArray)) output.push(item);
    return output;
  }, []);
}

function everyFn<T>(array: T[], callback: (item: T, index?: number, copyArray?: T[]) => boolean ): boolean {
  const copyArray: T[] = [...array];
  return copyArray.reduce((output: boolean, item, index, copyArray) => {
    if (!callback(item, index, copyArray)) {
      output = false;
      array.splice(1);
    }
    return output;
  }, true);
}

function someFn<T>(array: T[], callback: (item: T, index?: number, copyArray?: T[]) => boolean ): boolean {
  const copyArray: T[] = [...array];
  return copyArray.reduce((output: boolean, item, index, copyArray) => {
    if (callback(item, index, copyArray)) {
      output = true;
      array.splice(1);
    }
    return output;
  }, false);
}

console.log(mapFn([1, 2, 3], (x) => x * 2));
console.log(filterFn([2, 4, 6], (x) => x > 2));
console.log(everyFn([2, 4, 6], (x) => x >= 2));
console.log(someFn([2, 4, 6], (x) => x >= 2));
  