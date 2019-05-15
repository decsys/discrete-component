import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const Visualisation = ({ values }) => {
  const aggregate = values.reduce((agg, v) => {
    agg[v] = (agg[v] || 0) + 1;
    return agg;
  }, {});

  const counts = Object.keys(aggregate).map(v => aggregate[v]);
  const data = Object.keys(aggregate).map(x => ({ x, y: aggregate[x] }));

  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis
        label="Participants"
        dependentAxis
        tickCount={Math.max(...counts)}
        tickFormat={x => parseInt(x).toString()}
      />
      <VictoryAxis label="Likert Value" />
      <VictoryBar data={data} />
    </VictoryChart>
  );
};

const stats = results => {
  return {
    visualizations: [
      {
        name: "Likert Results",
        component: <Visualisation values={results.map(r => r.value)} />
      }
    ],
    stats: {
      mean: results.reduce((agg, r) => agg + r.value, 0) / results.length
    }
  };
};

export default stats;
