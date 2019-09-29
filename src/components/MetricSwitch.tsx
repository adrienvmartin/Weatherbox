import React from 'react';
import { Radio, RadioGroup } from "@material-ui/core";

interface IProps {
  metric: boolean;
}

interface IState {
  metric: boolean;
}

export class MetricSwitch extends React.Component<IProps, IState> {
  public state: IState ={
    metric: true
  };

  private onChange = (e) => {
    this.setState({
      metric: e.target.value,
    });
  }
}
