export default async function predict(req, res) {
    if (req.method == "POST") {
        res.status(200).json({
            Pregnancies: Pregnancies,
            Glucose: Glucose,
            BloodPressure: BloodPressure,
            SkinThickness: SkinThickness,
            Insulin: Insulin,
            BMI: BMI,
            DiabetesPedigreeFunction: DiabetesPedigreeFunction,
            Age: Age,
        })
    }
}