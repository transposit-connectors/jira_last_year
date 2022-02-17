() => {
  const jira = api.run("this.get_last_jira")[0];
  if (!jira) {
    return;
  }

  const { key, summary, statusName } = jira;
  const html = `<h3>EXACTLY 1 YEAR AGO YOU FILED</h3>
        <h1>${key}: ${summary}</h1>
		<hr/>
        <p style="letter-spacing: 1.4px">It's made a nice home for itself in the backlog</p>
        `;

  return api.run("this.send_message", {
    to: api.user().email,
    subject: `Exactly 1 year ago, you filed ${key}`,
    messageHtml: html,
  });
};
