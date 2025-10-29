## RateRight

RateRight is a small local Python web project for estimating/working with house rates. The repository contains a minimal server, a simple client UI, and model/artifact files for the prediction workflow.

This README explains the project structure, how to set up the required Python environment on Windows (PowerShell), how to run the server and open the client, and where to find model artifacts.

---

## Project overview

- Server: a lightweight Python server that likely exposes prediction endpoints or serves the client. See `server/server.py` and `server/util.py`.
- Client: a minimal front-end in `client/` (`app.html`, `app.js`, `app.css`) you can open in a browser to interact with the service or demo the UI.
- Model / Artifacts: model-related files and notebooks are in `model/` and `server/artifacts/` (for example, `columns.json` and the notebook `Untitledhouse_rate.ipynb`).

## Repository structure

```
requirements.txt
client/
    app.html
    app.js
    app.css
model/
    columns.json
    Untitledhouse_rate.ipynb
server/
    server.py
    util.py
    artifacts/
        columns.json
        Untitledhouse_rate.ipynb
```

## Requirements

- Python 3.8+ (recommended)
- The Python dependencies listed in `requirements.txt` (install via pip in a virtual environment).

## Quick setup (Windows PowerShell)

Open PowerShell in the project root (where this README and `requirements.txt` live) and run:

```powershell
# create and activate venv
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# install dependencies
pip install -r requirements.txt
```

If activation fails due to an execution policy, run PowerShell as Administrator and allow the policy just long enough, e.g.:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
.\.venv\Scripts\Activate.ps1
```

## Running the project

1. Start the server

```powershell
# From the project root
python server/server.py
```

2. Open the client UI

- Open `client/app.html` in your browser (you can just double-click the file or serve it via a static file server). If the server exposes APIs, the client will attempt to call them when used.

Notes:
- Ensure the server is running on the expected host/port the client expects. Open `client/app.js` and `server/server.py` to confirm endpoints and CORS behavior.

## Model artifacts

- `model/columns.json` and `server/artifacts/columns.json` hold column metadata used for feature processing.
- A notebook `Untitledhouse_rate.ipynb` is included in both `model/` and `server/artifacts/` — it looks like an exploratory/training notebook.

## Troubleshooting

- If you see missing package errors, verify your virtual environment is activated and `pip install -r requirements.txt` completed successfully.
- If the server fails to start, inspect `server/server.py` for the expected Python version or dependency imports.
- If the client cannot reach the server, check firewall, host/port, and CORS settings. Running both the server and opening the static client from the same machine (localhost) usually avoids CORS issues.

## Development notes

- To extend the server, add endpoints in `server/server.py` and helper functions in `server/util.py`.
- Update model artifacts under `server/artifacts/` when you retrain or change preprocessing. Keep `columns.json` in sync with model feature expectations.

## Contributing

Feel free to open issues or create PRs. Small improvements that help others (README clarifications, better front-end UX, or packaging) are welcome.

## License & contact

https://github.com/anshikabharadwaj98/RateRight
