export function Experience() {
    function changeJob() {
        var x = "This is a test";
        document.getElementById("test").display.fontSize = "30px";
        console.log(x);

    }

    return (

        <section className="experience">
            <div className="container">
                <h1>Experience</h1>
                <ul className="exp">
                    <li>Boardman Local Schools</li>
                    <li>Boardman Local Schools</li>
                    <li>Clear Cut Stump Grinding</li>
                </ul>
                <p id="test" onClick={changeJob()}>Computer Technology Intern<br></br><br></br>
                    As a computer technology intern for the Boardman Local Schools, I was responsible
                    for responding to teacher's and staff's help-desk tickets involving their
                    technology.
                </p>
            </div>


        </section>

    )
}