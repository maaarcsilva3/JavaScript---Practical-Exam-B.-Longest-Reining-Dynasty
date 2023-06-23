let dynastyReign = {
    "Dynasty A": "MXXXIV", // 1034 (5 years)
    "Dynasty B": "MXXXIX", // 1039 (7 years)
    "Dynasty C": "MXLVI", // 1046 (0 years)
    "Dynasty D": "MLV", // 1005 (29y ears)
};
  
function longestDynasty(dynastyReign) {
    if (Object.keys(dynastyReign).length === 0) {
      return "No Data";
    }
  
    let longestReign = 0;
    let longestDynasty = "";
  
    for (let dynasty in dynastyReign) {
      let endYear = convertYear(dynastyReign[dynasty]);
  
      if (typeof endYear !== "number") {
        continue;
      }
  
      let startYear = convertYear("M") + 1;
      let reignYears = endYear - startYear;
  
      if (reignYears >= longestReign) {
        longestReign = reignYears;
        longestDynasty = dynasty;
      }
    }
  
    return longestDynasty;
}
  
function convertYear(year) {
    const romanNumerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = year.length - 1; i >= 0; i--) {
      let current = romanNumerals[year[i]];
  
      if (current === undefined) {
        return "Invalid";
      }
  
      if (current >= prevValue) {
        result += current;
      } else {
        result -= current;
      }
  
      prevValue = current;
    }
  
    return result;
}
  
console.log(longestDynasty(dynastyReign)); // Dynasty D
  