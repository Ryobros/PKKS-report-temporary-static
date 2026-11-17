# SLB YAPMI Administrative Report

A dependency-free static report page for the 2026–2027 reporting period.

## Run locally

Serve this directory with any static web server and open `index.html`. For example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/slb-yapmi-admin-report/` if the server is started from the repository root, or `http://localhost:8000/` if started from this directory. The report loads its data from `data/report-2026-2027.json`.

The included indicator names and figures are sample content. Replace them with approved report data before publishing.
