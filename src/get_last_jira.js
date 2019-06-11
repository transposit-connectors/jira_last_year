(params) => {
  const moment = require('moment');
  const lastYr = moment().subtract('1', 'y');
  const dayAfter = moment().subtract('1', 'y').add(1, 'd');
  
  const jql = `createdDate >= "${lastYr.year()}-${lastYr.month()+1}-${lastYr.date()}" && createdDate < "${dayAfter.year()}-${dayAfter.month()+1}-${dayAfter.date()}" && resolution = Unresolved  && reporter = currentUser()`
console.log(jql)
  const [first,...rest] = api.run("transposit_jira.jira.search", {jql: jql}, {limit:10});
  if (!first) {
    return;
  }
  const { key, fields: { summary, status: { statusCategory: { name: statusName } } } } = first;
  return { key, summary, statusName };
}