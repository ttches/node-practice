const https = require("https");
const readline = require("readline");

function getData() {
  const url = "https://api.kraken.com/0/public/Depth?pair=xbtusd";
  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      display(body);
    });
  });
}

function calcWeightedPrice(arr) {
  let total = 0;
  let shareSum = 0;
  for (let i = 0; total < 100000; i++) { //Change max value here
    const price = Number(arr[i][0]);
    const shares = Number(arr[i][1]);
    console.log(`Price: ${price}  Shares: ${shares}`) //Add // to the beginning of this line when confident with calculations
    total += price * shares;
    shareSum += shares;
  }
  //console.log(total, shareSum);
  console.log(`Weighted Price: ${(total / shareSum).toFixed(4)} \nAmount: $${total.toFixed(4)}`);
}

function display(arr) {
  const { asks, bids } = arr.result.XXBTZUSD
  console.log('----------');
  console.log('ASKS');
  calcWeightedPrice(asks);
  console.log('----------');
  console.log('BIDS');
  calcWeightedPrice(bids);
  getUserInput();
}

function getUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Type r to refresh, cmd + C to exit\n', (answer) => {
    if (answer === 'r') {
      getData();
    } else {
      getUserInput();
    }
    rl.close();
  })
}

getData();
