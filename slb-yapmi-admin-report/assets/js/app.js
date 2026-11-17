async function startReport() {
  const status = document.querySelector("#report-status");
  try {
    const report = await loadReportData();
    renderReport(report);
    status.textContent = "Report data loaded";
    status.dataset.state = "loaded";
  } catch (error) {
    status.textContent = "Report data could not be loaded. Please try again later.";
    status.dataset.state = "error";
    console.error(error);
  }
}

startReport();
