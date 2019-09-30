import React, { Fragment } from "react";
import { connect } from "react-redux";
import GridSettings, { INITIAL_STATE } from "./GridSettings";
import Output from "./Output";

const Main = () => {
  return (
    <Fragment>
      <GridSettings
        metric={INITIAL_STATE.metric}
        collapsed={INITIAL_STATE.collapsed}
        open={INITIAL_STATE.open}
        singleLine={INITIAL_STATE.singleLine}
        tempColour={INITIAL_STATE.tempColour}
        precipColour={INITIAL_STATE.precipColour}
        rainColour={INITIAL_STATE.rainColour}
        snowColour={INITIAL_STATE.snowColour}
        unitPrecipDays={INITIAL_STATE.unitPrecipDays}
        unitRainDays={INITIAL_STATE.unitRainDays}
        unitSnowDays={INITIAL_STATE.unitSnowDays}
        humidColour={INITIAL_STATE.humidColour}
        calculateYearAvg={INITIAL_STATE.calculateYearAvg}
        calculateMeanTemps={INITIAL_STATE.calculateMeanTemps}
      />
      <br />
      <Output />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  metric: state.settings.metric,
  open: state.settings.open,
  collapsed: state.settings.collapsed,
  singleLine: state.settings.singleLine,
  tempColour: state.settings.tempColour,
  precipColour: state.settings.precipColour,
  rainColour: state.settings.rainColour,
  snowColour: state.settings.snowColour,
  humidColour: state.settings.humidColour,
  unitPrecipDays: state.settings.unitPrecipDays,
  unitRainDays: state.settings.unitRainDays,
  unitSnowDays: state.settings.unitSnowDays,
  calculateYearAvg: state.settings.calculateYearAvg,
  calculateMeanTemps: state.settings.calculateMeanTemps
});

export default connect(mapStateToProps)(Main);
