import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function Home() {
    return (
        <Container fluid className="fluid home mt-5">
            <div className="home-wrapper d-flex">
                <div className="home-img-wrapper">
                    <img src="https://preview.colorlib.com/theme/edumark/img/banner/edu_ilastration.png.webp" alt="home img" />
                </div>
                <div className="home-heading-wrapper">

                    <h1 className=" text-light">Learn your <br />
                        Favorite Course <br />
                        From Online</h1>
                    <Link to="/register" className="boxed_btn my-3">Register Now</Link>

                </div>
            </div>
        </Container>
    );
}

export default Home
