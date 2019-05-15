import React from "react";
import Visualization from "./components/Visualization";
import { nanWrap, mean, sd } from "./utils/stats";

const stats = results => {
  return {
    visualizations: [
      {
        name: "Likert Results",
        component: <Visualization values={results.map(r => r.value)} />
      }
    ],
    stats: {
      // well... mean only really works for numeric values
      // and is also a "false" value for a likert scale providing a rank
      // so we'll do the best we can
      ["Values Mean"]: nanWrap(mean)(results.map(r => r.value)),
      ["Values Standard Deviation"]: nanWrap(sd)(results.map(r => r.value)),
      ["Selected Index Mean"]: mean(results.map(r => r.index)),
      ["Selected Index Standard Deviation"]: sd(results.map(r => r.index))
    }
  };
};

export default stats;
