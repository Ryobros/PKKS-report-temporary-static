function renderReport(report) {
  document.querySelector("#report-period").textContent =
    `${report.organization} · ${report.period}`;
  document.querySelector("#last-updated").textContent =
    `Updated ${new Date(report.lastUpdated).toLocaleDateString()}`;

  const summaryCards = document.querySelector("#summary-cards");
  report.summary.forEach(({ label, value }) => {
    const card = document.createElement("article");
    card.className = "summary-card";

    const title = document.createElement("p");
    title.className = "summary-label";
    title.textContent = label;

    const total = document.createElement("p");
    total.className = "summary-value";
    total.textContent = new Intl.NumberFormat().format(value);

    card.append(title, total);
    summaryCards.append(card);
  });

  const rows = document.querySelector("#report-rows");
  report.indicators.forEach(({ name, target, realized, status }) => {
    const row = document.createElement("tr");
    [name, target, realized].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });

    const statusCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "status-pill";
    badge.textContent = status;
    statusCell.append(badge);
    row.append(statusCell);
    rows.append(row);
  });
}
