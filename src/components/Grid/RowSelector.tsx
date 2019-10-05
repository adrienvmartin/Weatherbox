import React, { Fragment } from "react";
import {
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Grid,
  Button
} from "@material-ui/core";

interface IProps {
  rows: any;
  onChange: (e) => any;
  selectAllChecks: () => any;
  selectNone: () => any;
}

const RowSelector: React.FC<IProps> = props => {
  const { onChange, rows, selectAllChecks, selectNone } = props;
  return (
    <Fragment>
      <h1>Data Type Selection</h1>
      <p>Select the types of data you want to include in your weatherbox.</p>
      <Grid container spacing={2} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rows[0].selected}
                    onChange={onChange}
                    value={0}
                  />
                }
                label="Record high humidex"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rows[1].selected}
                    onChange={onChange}
                    value={1}
                  />
                }
                label="Record high"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rows[2].selected}
                    onChange={onChange}
                    value={2}
                  />
                }
                label="Mean maximum"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[3].selected}
                  onChange={onChange}
                  value={3}
                />
              }
              label="Average high"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[4].selected}
                  onChange={onChange}
                  value={4}
                />
              }
              label="Daily mean"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[5].selected}
                  onChange={onChange}
                  value={5}
                />
              }
              label="Average low"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[6].selected}
                  onChange={onChange}
                  value={6}
                />
              }
              label="Record low"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[7].selected}
                  onChange={onChange}
                  value={7}
                />
              }
              label="Mean minimum"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[8].selected}
                  onChange={onChange}
                  value={8}
                />
              }
              label="Record low windchill"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[9].selected}
                  onChange={onChange}
                  value={9}
                />
              }
              label="Average precipitation"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[10].selected}
                  onChange={onChange}
                  value={10}
                />
              }
              label="Average rainfall"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[11].selected}
                  onChange={onChange}
                  value={11}
                />
              }
              label="Average snow"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[12].selected}
                  onChange={onChange}
                  value={12}
                />
              }
              label="Average precipitation days"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[13].selected}
                  onChange={onChange}
                  value={13}
                />
              }
              label="Average rainfall days"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[14].selected}
                  onChange={onChange}
                  value={14}
                />
              }
              label="Average snow days"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[15].selected}
                  onChange={onChange}
                  value={15}
                />
              }
              label="Average humidity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[16].selected}
                  onChange={onChange}
                  value={16}
                />
              }
              label="Average afternoon humidity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[17].selected}
                  onChange={onChange}
                  value={17}
                />
              }
              label="Mean monthly sunshine"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[18].selected}
                  onChange={onChange}
                  value={18}
                />
              }
              label="Mean daily sunshine hours"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[19].selected}
                  onChange={onChange}
                  value={19}
                />
              }
              label="Percent of possible sunshine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rows[20].selected}
                  onChange={onChange}
                  value={20}
                />
              }
              label="Average UV index"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={selectAllChecks}>Select All</Button>
          <Button onClick={selectNone}>Select None</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default RowSelector;
