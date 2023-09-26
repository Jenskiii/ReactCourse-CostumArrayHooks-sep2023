import { useCallback, useState } from "react";

//costum hook /  useArray()
export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  /*when using functions inside costum hook that return something use , useCallBack()*/

  //  pushes value to the end
  const push = useCallback((element) => {
    setArray((a) => [...a, element]);
  });

  // slices out at specific index and replaces with new Value
  const replace = useCallback((index, newValue) => {
    setArray((a) => {
      return [...a.slice(0, index), newValue, ...a.slice(index + 1)];
    });
  }, []);

  //  removes all same as or above value so removes 3 and up
  const filter = useCallback((callback) => {
    setArray((a) => {
      return a.filter(callback);
    });
  }, []);

  // removes element at given index
  const remove = useCallback((index) => {
    setArray((a) => {
      return [...a.slice(0, index), ...a.slice(index + 1)];
    });
  }, []);

  // clears array
  const clear = useCallback(() => {
    return setArray([]);
  }, []);

  // resets array
  // initialValue = default value
  const reset = useCallback(() => {
    setArray(initialValue);
  }, []);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
