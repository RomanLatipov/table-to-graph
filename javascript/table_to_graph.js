function tableToGraph(friends) {
  friends = friends.replaceAll("<tr>", "")
  friends = friends.replaceAll("</tr>", "")
  const friendsCp = friends.substring(friends.indexOf("<td>"), friends.lastIndexOf("</td>")+5);
  const temp = friendsCp.split('</td>');
  temp.pop();
  for (let i=0; i<temp.length; i++) {
    temp[i] = temp[i].replace("<td>", "")
  }
  const obj = {};
  for (let i=0; i<temp.length-1; i=i+2) {
    if (!obj[temp[i]]) {
      obj[temp[i]] = [];
    }
    let tempArr = temp[i+1].split(", ");
    for (let j=0; j<tempArr.length; j++) {
      if (!obj[temp[i]].includes((tempArr[j])))
        obj[temp[i]].push(tempArr[j])
      if (!obj[tempArr[j]])
        obj[tempArr[j]] = [temp[i]];
      else {
        if (!obj[tempArr[j]].includes((temp[i])))
          obj[tempArr[j]].push(temp[i]);
      }
        
    }
  }
  console.log(obj)
  // return obj;
}

if (require.main === module) {
  function printResults(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

  // add your own tests in here
  const friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>";
  const result = {
    Fred: ["Jane", "Carol", "Anesh", "Xi"],
    Jane: ["Fred"],
    Carol: ["Fred", "Anesh", "Janelle"],
    Anesh: ["Fred", "Carol"],
    Xi: ["Fred"],
    Janelle: ["Carol"]
  };
  let friends1 = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr></table>";
  // console.log("Expecting: ");
  // console.log(printResults(result));
  // console.log("");
  // console.log("Got: ");
  // console.log(printResults(tableToGraph(friends)));
  tableToGraph(friends1)

  console.log("");
}

module.exports = tableToGraph;

// Please add your pseudocode to this file
// And a written explanation of your solution
