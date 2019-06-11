(params) => {
  const moment = require('moment');
  const lastYr = moment().subtract('1', 'y');
  const dayAfter = moment().subtract('1', 'y').add(1, 'd');
  
  const jql = `
	createdDate >= "${lastYr.year()}-${lastYr.month()+1}-${lastYr.date()}" && 
	createdDate < "${dayAfter.year()}-${dayAfter.month()+1}-${dayAfter.date()}" && 
	resolution = Unresolved  && reporter = currentUser()`;

  const jira = api.run("transposit_jira.jira.search", {jql: jql}, {limit:1})[0];
  if (!jira) {
    return;
  }

  const { key, fields: { summary, status: { statusCategory: { name: statusName } } } } = jira;
  return { key, summary, statusName };
}