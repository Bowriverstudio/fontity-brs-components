import { Action, Package } from "frontity/types";

interface components extends Package {
  name: "components";
  state: {
    components: {
      val1: boolean | string;
      val2: boolean | string;
    };
  };
  actions: {
    components: {
      setVal1: Action<components, boolean | string>;
      setVal2: Action<components, boolean | string>;
    };
  };
}

export default components;
