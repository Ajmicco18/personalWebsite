export default function Experience() {
    const jobs = [
        {
            id: 1,
            jobTitle: "Assistant Middle School Football Coach",
            Company: "Boardman Local School District",
            duration: "June 2022-Present",
            text: ["As an assistant middle school football coach, I was responsible",
                "for coaching the offensive lineman. I would demonstrate and explain",
                "basic techniques and ideas to the players to ensure they had a better",
                "understanding of football, specifically the offensive line."]
        },

        {
            id: 2,
            jobTitle: "Computer Technology Intern",
            Company: "Boardman Local School District",
            duration: "January 2023-August 2023",
            text: ["In my role as a Computer Technology Intern for the Boardman Local School District,",
                "I was largely responsible for responding to help-desk tickets from teachers and",
                "staff throughout the district. In addition, I was in charge of maintaining the",
                "inventory of the district's devices as well as repairing damaged Chromebooks.",
                "Furthermore, my role included ensuring that each classroom in the district had updated",
                "and operating devices."]
        },

        {
            id: 3,
            jobTitle: "Landscaper",
            Company: "Clear Cut Stump Grinding",
            duration: "March 2019-August 2022",
            text: ["In my role as a landscaper for Clear Cut Stump Grinding,",
                "I was largely responsible for clearing away excess wood",
                "chips from the work area to ensure the entire stump was clear.",
                "In addition, I would haul wheelbarrows of topsoil and landscape",
                "rock to the work site. Furthermore, I laid landscape fabric and",
                "spread grass seed in contribution to the project we were working on."]

        }
    ]


    return (

        <section className="experience">
            <div className="container">
                <h1>Experience</h1>
                <ul className="exp">
                    <button>Boardman Local Schools</button>
                    <button>Boardman Local Schools</button>
                    <button>Clear Cut Stump Grinding</button>
                </ul>
            </div>

        </section>

    )
}