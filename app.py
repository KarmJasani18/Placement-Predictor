import os
import pickle
import warnings
import numpy as np
from flask import Flask, request, jsonify, render_template

warnings.filterwarnings("ignore")

app = Flask(__name__)

# ── Load model once at startup ────────────────────────────────────────────────
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.pkl")
with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

# ── Routes ────────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    iq = float(data["iq"])
    cgpa = float(data["cgpa"])

    features = np.array([[iq, cgpa]])

    pred_class = int(model.predict(features)[0])
    proba = model.predict_proba(features)[0]

    placed_prob = float(proba[1]) * 100
    not_placed_prob = float(proba[0]) * 100

    result = "Placed" if pred_class == 1 else "Not Placed"
    confidence = placed_prob if pred_class == 1 else not_placed_prob

    return jsonify({
        "result": result,
        "confidence": round(confidence, 2),
        "iq": iq,
        "cgpa": cgpa
    })

# ── Entry point ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
