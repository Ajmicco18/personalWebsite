export function Experience() {
    const jobs = [
        {
            id: 1,
            jobTitle: "Assistant Middle School Football Coach",
            Company: "Boardman Local School District",
            duration: "June 2022-Present",
            text: ["As a middle school football coach."]
        },

        {
            id: 2,
            jobTitle: "Computer Technology Intern",
            Company: "Boardman Local School District",
            duration: "January 2023-August 2023",
            text: ["As a computer technology intern for the Boardman Local Schools, I was responsible",
                "for responding to teacher's and staff's help-desk tickets involving their technology."]
        },

        {
            id: 3,
            jobTitle: "Landscaper",
            Company: "Clear Cut Stump Grinding",
            duration: "March 2019-August 2022",
            text: ["As a landscaper"]

        }
    ]


    return (

        <section className="experience">
            <div className="container">
                <h1>Experience</h1>
                <ul className="exp">
                    <button onClick={() => test()} >Boardman Local Schools</button>
                    <button>Boardman Local Schools</button>
                    <button>Clear Cut Stump Grinding</button>
                </ul>
            </div>

        </section>

    )
}