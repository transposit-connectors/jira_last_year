() => {
  const [first,...rest] = api.run("this.last_year_jira");
  if (!first) {
    return;
  }
  
  const { key, summary, statusName } = first;
  const phrase = api.run("this.regretable_phrases")[0];
  
  const html =`<h3>EXACTLY 1 YEAR AGO YOU FILED</h3>
        <h1><a href="https://transposit.atlassian.net/browse/${key}">${key}</a>: ${summary}</h1>
		<hr/>
        <p style="letter-spacing: 1.4px">It's made a nice home for itself in the backlog</p>
        `
  
  return api.run("this.send_html_email", {
    to: api.user().email,
    from: "iggy",
    subject: `Exactly 1 year ago, you filed ${key}`,
    messageHtml: html
  });
}