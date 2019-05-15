import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from "./Component";

const dummyLikertResults = [
  { index: 0, value: "Hello" },
  { index: 0, value: "Hello" },
  { index: 0, value: 3 },
  { index: 0, value: 3 },
  { index: 0, value: "Hllo" },
  { index: 0, value: "Hello" },
  { index: 0, value: "Goodbye" },
  { index: 0, value: true },
  { index: 0, value: "Other" }
];

const actions = {
  setNextEnabled: action("Next button toggled"),
  logResults: action("Results logged")
};

storiesOf("Component", module)
  .add("Default", () => (
    <Component
      radio1="1"
      radio2="2"
      radio3="3"
      radio4="4"
      radio5="5"
      radio6="6"
      radio7="7"
      radio8="I'm not used"
      radio1Secondary="Low"
      radio7Secondary="High"
      barLeftMargin={10}
      barTopMargin={50}
      barRightMargin={10}
      barThickness={8}
      {...actions}
    />
  ))
  .add("Stats", () => {
    var stats = Component.stats(dummyLikertResults);
    return (
      <div>
        {Object.keys(stats.stats).map(x => (
          <div key={x}>
            <h4>{x}</h4>
            <p>{stats.stats[x]}</p>
          </div>
        ))}
      </div>
    );
  })
  .add("Visualisation", () => {
    var stats = Component.stats(dummyLikertResults);
    return (
      <div style={{ width: "40%" }}>{stats.visualizations[0].component}</div>
    );
  });
