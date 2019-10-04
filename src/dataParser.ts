import { columns } from "./constants";

export const dataParser = state => {
  const header = "{{Weather box";
  // const footer = "}}";
  const collapsedSettings =
    state.settings.collapsed === "true" ? `|collapsed = yes` : "";
  const openSettings = state.settings.open === "true" ? `|open = yes` : "";

  const units = { temp: "", precip: "", snow: "" };
  if (state.settings.metric == "true") {
    units.temp = "C";
    units.precip = "mm";
    units.snow = "cm";
  } else {
    units.temp = "F";
    units.precip = "inch";
    units.snow = "inch";
  }

  // const dataRow = `|${month} ${field} ${unit} = ${input}`;

  const generateRow = (month, field, unit) => {
    // const specUnit = precipitation ? : units.precip (and so on)
  };

  const months = columns.map(c => `|${c.name}`);
  const fields = state.data.map(r => ` ${r.field}`);
  const jan = state.data.map(v => v["jan"]);
  const feb = state.data.map(v => v["feb"]);
  const mar = state.data.map(v => v["mar"]);
  const apr = state.data.map(v => v["apr"]);
  const may = state.data.map(v => v["may"]);
  const jun = state.data.map(v => v["jun"]);
  const jul = state.data.map(v => v["jul"]);
  const aug = state.data.map(v => v["aug"]);
  const sep = state.data.map(v => v["sep"]);
  const oct = state.data.map(v => v["oct"]);
  const nov = state.data.map(v => v["nov"]);
  const dec = state.data.map(v => v["dec"]);
  const monthState = {
    jan,
    feb,
    mar,
    apr,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec
  };

  const selectedRows = state.data
    .filter(d => d.selected === true)
    .map(d => d.templateCode);

  const finalArray = [[months], [selectedRows]]; // finalArray.forEach => index 0 for months, index 1 for rows for selectedrows length, write out the month each time

  const dataObj = {};

  months.forEach(m => {
    for (let i = 1; i < selectedRows.length; i++) {
      // dataObj = { [`key${i}`]: m, [`field${i}`]: selectedRows[i] }
      dataObj[`key${i}`] = m;
      dataObj[`field${i}`] = selectedRows[i];
    }
    // dataObj[m] = selectedRows;
  });

  const display = [];
  // @ts-ignore
  const monthList = Object.values(dataObj).filter(o => o % 2);
  months.forEach(m => {
    for (let i = 0; i < months.length; i += 2) {
      // @ts-ignore
      display.push(m);
    }
  });

  const rowObj = [];
  const monthsObject = [];
  selectedRows.forEach(row => {
    for (let i = 0; i < selectedRows.length; i++) {
      // @ts-ignore
      monthsObject.push(months.forEach(m => m));
    }
  });

  // months.forEach(m =>
  // console.log(`${m} ${selectedRows.forEach(s => s)} ${units.temp}`)
  // );

  const returnMonth = (month, rows) => {
    const monthHeader = month.repeat(rows.length);
    const monthHeaderType = typeof monthHeader;
    const rowHeader = rows.forEach(r => {
      return r.toString();
    });
    // const combined = monthHeader.map((m, i) => { return `${m} ${rows[i]}`});
    // console.log('monthHeader: ' + monthHeader + '\n rowHeader: ' + rows + '\n combined: ');
    console.log(`rows: \n${rows}`);
    console.log(`months: \n${months}`);
    return `${monthHeader} ${rowHeader}`;
  };

  const returnRowObj = () => {
    const looper = [];
    selectedRows.forEach(r => {
      for (let i = 1; i < columns.length -1; i ++) {
        const col = columns[i].name;
        //@ts-ignore
        looper.push(`|${col} ${r} = \n`);
        if (i % 12 === 0) {
          //@ts-ignore
          looper.push('\n');
        }
      }
    });
    return looper.join('');
  };

  // const test = months.forEach(m => returnMonth(m, selectedRows));

  console.log(
    "Months: \n" +
      months +
      "\n \n \n" +
      "selectedRows: \n" +
      selectedRows +
      `
 \n \n \n` +
      "dataObj: \n" +
      Object.entries(dataObj) +
      `\n \n \n`
  );

  // return `${header} \n ${collapsedSettings} \n ${openSettings} \n ${months} \n`;
  // return `${Object.values(final[1])} ${Object.keys(final[1])} ${units.temp} = `;
  // const datakeys = Object.entries(dataObj);
  // datakeys.forEach(d => console.log(d));
  return `${returnRowObj()}`;
};
