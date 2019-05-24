import React from "react";
import * as math from "mathjs";
import Visualization from "./components/Visualization";


const stats = results => {
  const { values, indices } = results.reduce(
    (data, r, i, a) => {
      data.values.push(r.value);
      data.indices.push(r.index);
      return data;
    },
    { values: [], indices: [] }
  );
  return {
    visualizations: [
      {
        name: "Likert Results",
        component: <Visualization values={values} />
      }
    ],
    stats: {
      // well... mean only works for numeric values
      // and is also a "false" value for a likert scale providing a rank
      // so we'll do the best we can
      ["Values Mean"]: values.some(n => isNaN(parseFloat(n)))
        ? "N/A"
        : math.mean(values),
      ["Values Standard Deviation"]: values.some(n => isNaN(parseFloat(n)))
        ? "N/A"
        : math.std(values),
      ["Selected Index Mean"]: math.mean(indices),
      ["Selected Index Standard Deviation"]: math.std(indices)
    }
  };
};

export default stats;
