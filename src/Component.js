import React, { useEffect } from "react";
import * as props from "./Component.props";
import DiscreteScale from "@decsys/rating-scales/esm/discrete";
import stats from "./Component.stats";

const Component = ({
  barLeftMargin,
  barRightMargin,
  barTopMargin,
  barColor,
  barThickness,
  labelColor,
  fontFamily,
  fontSize,
  labelAlignment,
  initialIndex,
  initialValue,
  logResults,
  setNextEnabled,
  ...radioParams
}) => {
  const handleDiscreteSelected = e => {
    logResults(e.detail);
    setNextEnabled(true);
  };

  useEffect(() => {
    setNextEnabled(false);
    document.addEventListener("DiscreteSelected", handleDiscreteSelected);
    return () =>
      document.removeEventListener("DiscreteSelected", handleDiscreteSelected);
  }, []);

  // prepare radio button values
  const radios = Object.keys(radioParams)
    .sort((a, b) => a.match(/\d+/) - b.match(/\d+/)) // guarantee ascending numeric order
    .reduce((acc, key) => {
      if (key.includes("Secondary")) return acc; // ignore secondary params

      if (!radioParams[key]) return acc;
      const radio = [radioParams[key]]; // add the radio value
      if (radioParams[`${key}Secondary`])
        radio.push(radioParams[`${key}Secondary`]); // add the Secondary label

      acc.push(radio);
      return acc;
    }, []);

  return (
    <DiscreteScale
      barOptions={{
        leftMargin: `${barLeftMargin}%`,
        rightMargin: `${barRightMargin}%`,
        topMargin: `${barTopMargin}%`,
        barColor,
        thickness: `${barThickness}px`
      }}
      radioOptions={{
        labelColor,
        fontFamily,
        fontSize,
        labelAlignment,
        initialIndex,
        initialValue
      }}
      radios={radios}
      frameHeight="300px"
    />
  );
};

Component.params = props.params;
Component.propTypes = props.propTypes;
Component.defaultProps = props.defaultProps;
Component.stats = stats;

export default Component;
