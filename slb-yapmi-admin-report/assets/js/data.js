async function loadReportData() {
  const response = await fetch("./data/report-2026-2027.json");
  if (!response.ok) {
    throw new Error(`Unable to load report data (${response.status}).`);
  }
  return response.json();
}
