function Form() {

    async function handleSubmit(event) {
        event.preventDefault()

        const res = await fetch("https://pima-diabetes.herokuapp.com/predict", {
            body: JSON.stringify({
                Pregnancies: event.target.Pregnancies.value,
                Glucose: event.target.Glucose.value,
                BloodPressure: event.target.BloodPressure.value,
                SkinThickness: event.target.SkinThickness.value,
                Insulin: event.target.Insulin.value,
                BMI: event.target.BMI.value,
                DiabetesPedigreeFunction: event.target.DiabetesPedigreeFunction.value,
                Age: event.target.Age.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json()
        console.log(result)
    }
    return (
        <div>
            <form class="w-full max-w-lg" method="POST" onSubmit={handleSubmit}>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="Pregnancies">
                    </label>
                    Pregnancies
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Pregnancies" type="text" placeholder=""></input>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="Glucose">
                        Glucose
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Glucose" type="text" placeholder=""></input>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="BloodPressure">
                    </label>
                    Blood Pressure
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="BloodPressure" type="text" placeholder=""></input>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
                    </label>
                    Skin Thickness
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="SkinThickness" type="text" placeholder=""></input>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="Insulin">
                    </label>
                    Insulin
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Insulin" type="text" placeholder=""></input>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="BMI">
                    </label>
                    BMI
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="BMI" type="text" placeholder=""></input>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="DiabetesPedigreeFunction">
                    </label>
                    Diabetes Pedigree Function
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="DiabetesPedigreeFunction" type="text" placeholder=""></input>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="Age">
                    </label>
                    Age
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Age" type="text" placeholder=""></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
