let dynastyReign = {
    "Dynasty A": "MXXXIV", // 1034   5 years
    "Dynasty B": "MXXXIX", // 1039  7 years
    "Dynasty C": "MXLVI", // 1046   10years
    "Dynasty D": "MLVI", // 1056
};

function longestDynasty(dynastyReign) {
    if (Object.keys(dynastyReign).length === 0) {
      return "No Data";
    }
  
    let longestReign = 0;
    let longestDynasty = "";
  
    for (let dynasty in dynastyReign) {
      let endYear = convertYear(dynastyReign[dynasty]) + 1;
  
      if (endYear > longestReign) {
        longestReign = endYear;
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
    let val = 0;
  
    for (let i = year.length - 1; i >= 0; i--) {
      let current = romanNumerals[year[i]];
  
      if (current === undefined) {
        return "No Data";
      }
  
      if (current >= val) {
        result += current;
      } else {
        result -= current;
      }
  
      val = current;
    }
  
    return result;
}


  
console.log(longestDynasty(dynastyReign)); // Dynasty D


  