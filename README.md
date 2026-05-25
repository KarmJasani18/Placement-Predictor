# 🎓 Placement Prediction Web App


## Overview:
I built this project when I had just started learning Machine Learning.  
The goal was not to create a perfect real-world placement prediction system or achieve extremely high accuracy, but to practically explore the fundamentals of ML, model deployment, real-world prediction behavior and how Machine Learning works end-to-end for a beginner.

This project helped me understand:
- how models are trained on datasets
- how preprocessing affects predictions
- how ML models are deployed into web applications
- how unrealistic model behavior can occur even with high accuracy

The project became a great learning experience for understanding the foundations of real-world ML workflows.


---
# 🚀 What is this?

This project is a Placement Prediction Web Application that predicts the probability of student placement using:
- IQ Score
- CGPA

The project uses:
- Logistic Regression
- Flask
- HTML/CSS/JavaScript
- Scikit-learn Pipeline
  
The goal of this project was to deeply understand how Machine Learning models work end-to-end:
- dataset creation
- preprocessing
- model training
- visualization
- deployment
- frontend/backend integration

---

# ❓ Why this project?

I had recently started learning Machine Learning and wanted to build something practical instead of only learning theory.

This project helped me explore:
- Data preprocessing
- Logistic Regression
- Decision boundaries
- Feature scaling
- Model deployment using Flask
- ML + Web Development integration

Most importantly, it helped me understand that:

> Better accuracy does NOT always mean a better model.

---

# ⚙️ How does it work?

The application follows this workflow:

```text
User Input (IQ + CGPA)
        ↓
Scikit-learn Pipeline
        ↓
StandardScaler
        ↓
Logistic Regression
        ↓
Placement Probability Prediction
```

The trained model is stored using:
- `model.pkl`

The project uses a Scikit-learn Pipeline which internally handles:
- preprocessing
- scaling
- prediction

This prevents preprocessing mismatches during deployment.

---

# 📊 Initial Problem I Discovered

Initially, the model was trained on a synthetic dataset of around 1,000 rows.

Although the model achieved high accuracy (~88%), I discovered unrealistic predictions during testing.

Examples:
- IQ = 140 and CGPA = 4 → Predicted “Placed”
- IQ = 160 and CGPA = 3.75 → Predicted “Placed”

After visualizing the decision boundary, I understood the reason:

Logistic Regression creates a linear decision boundary.

Very high IQ values were compensating too strongly for low CGPA values because the model was learning a straight-line separation.

This became one of the most important learning moments of the project.

---

# 🔥 Improvements I Made

To improve realism and practical behavior, I redesigned the dataset completely.

Changes made:
- Increased dataset size from 1,000 → 10,000 rows
- Reduced unrealistic IQ dominance
- Added contradictory and edge-case examples
- Made low CGPA harder to compensate for
- Improved overall decision boundary realism

After improvements:
- Accuracy dropped from ~88% → ~76%
- But predictions became significantly more realistic and believable

This taught me that:
- Data quality matters more than model complexity
- High accuracy can still produce unrealistic behavior
- Visualization is extremely important in ML

---

# 🧠 Technologies Used

- Python
- NumPy
- Pandas
- Scikit-learn
- Flask
- HTML
- CSS
- JavaScript
- Matplotlib
- Mlxtend

---

# 📈 Key Concepts Explored

- Logistic Regression
- Standardization
- Scikit-learn Pipeline
- Decision Boundary Visualization
- Probability Prediction
- Model Serialization using Pickle
- Frontend + Backend Integration

---

# 🌐 Features

- Interactive Web UI
- Real-time Placement Prediction
- Probability Display
- Prediction History
- LocalStorage-based session history
- Responsive modern interface

---

# 📚 What I Learned

This project taught me much more than simply training a model.

I learned:
- ML models can behave unrealistically even with good accuracy
- Dataset design strongly affects model behavior
- Visualization helps understand model assumptions
- Deployment introduces completely new challenges
- Real-world ML problems are noisy and non-linear

---

# 📌 Future Improvements

This is still a toy project and does not represent real-world placement systems.

Future improvements may include:
- More real-world features
- Non-linear models
- Decision Trees / Random Forests
- Real placement datasets
- More advanced feature engineering

Possible future parameters:
- College
- Internship experience
- Coding profiles
- Hackathons
- Projects
- Research experience

---

# 📂 Project Structure

```text
Placement-Predictor/
│
├── app.py
├── model.pkl
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── app.js
│
├── DataSet/
│   └── engineering_student_placement_dataset.csv
│
├── Notebook/
│   └── training.ipynb
│
└── Images/
```

# ⚡ Installation & Running

Clone the repository:

```bash
git clone <https://github.com/KarmJasani18/Placement-Predictor>
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the Flask application:

```bash
python app.py
```

# 📷 Screenshots
## Web Interface
<img width="1262" height="903" alt="UI" src="https://github.com/user-attachments/assets/ce65f6ac-cbdc-41fa-9076-168a43397ab4" />
<img width="1893" height="903" alt="prediction_example" src="https://github.com/user-attachments/assets/de95bfea-c038-475c-91c8-11e895d3f0e2" />
<img width="1899" height="904" alt="prediction_example" src="https://github.com/KarmJasani18/Placement-Predictor/blob/main/Images/Prediction_History.png?raw=true" />


## Initial Decision Boundary
<img width="1456" height="1080" alt="Errored_decision_boundary" src="https://github.com/user-attachments/assets/56a44587-a127-4399-97b8-c8c7f72e4537" />


## Improved decision boundary after redesigning the dataset for more realistic predictions.
<img width="1448" height="1086" alt="Improved_decision_boundary" src="https://github.com/user-attachments/assets/157712c7-1b65-4577-b81e-c369af5c4375" />



---

## 👨‍💻 Author
Karm Jasani

Machine Learning Enthusiast 🚀
