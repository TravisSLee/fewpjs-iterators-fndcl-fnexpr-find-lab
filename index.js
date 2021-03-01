const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 
function superbowlWin(array){
    let win = array.find(function(e) { return e.result === "W" })
    return win['year']
};