module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100075127191325","100075127191325","100075127191325","100075127191325") {
    var aid = ["100075127191325","100075127191325","100075127191325","100075127191325"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস Fahad  কে এতো ডাকো কেন😒, ভালো টালো বাসো নাকি🤭", "FAHAD boss re আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", " বস  কাজে ব্যস্ত আছে যা বলার আমাকে বলো🫣", "বস  এত মেনশন না দিয়ে পারলে একটা একটা গার্লফ্রেন্ড দে"," বসকে মেনশন দিস,বস এই মুহূর্তে তোর নানির সাথে রুম ডেট করতে ।"বস  কে একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু 🤭🙈🤖","বস কই থুমি থুমারে এক বলদে ডাকে😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
