export function Experience() {
    function test() {
        const x = "this is a test";
        console.log(x);
    }

    return (

        <section className="experience">
            <div className="container">
                <h1>Experience</h1>
                <ul className="exp">
                    <button onClick={() => test()} >Boardman Local Schools</button>
                    <button>Boardman Local Schools</button>
                    <button>Clear Cut Stump Grinding</button>
                </ul>
                <p className="exp_para">Computer Technology Intern<br></br><br></br>
                    As a computer technology intern for the Boardman Local Schools, I was responsible
                    for responding to teacher's and staff's help-desk tickets involving their
                    technology.
                </p>
            </div>


        </section>

    )
}