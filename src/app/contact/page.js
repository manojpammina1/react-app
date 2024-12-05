export default function Page() {

    async function submitForm(formData) {
        "use server"; //directive
        const formFeilds = {
            email: formData.get("email"),
            message: formData.get("message")
        };
        console.log("formFeilds", formFeilds);
        console.log("TODO: send these form field values to a backend");
        return formFeilds;

    }

    return(
        <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
             <h1 className="text-2xl font-bold text-center mb-6">This is contact page</h1>

             <form className="space-y-4" action={submitForm}>
                <div>
                    <label htmlFor="email" 
                        className="block text-sm font-medium text-gray-700">Email</label>
                    <input id ="email"
                        type= "email"
                        name ="email"
                        required
                        className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-300"
                    />

                </div>
                <div>
                    <label htmlFor="message"
                        className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message"
                            name ="message"
                            rows = "4"
                            required 
                            className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-300"></textarea>
                </div>
                <button type= "Submit"
                        className="text-white bg-blue-600 rounded-md p-3">
                    Send Message
                </button>
             </form>
        </main>
    )
}