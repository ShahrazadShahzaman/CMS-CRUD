import { Link } from "react-router-dom"

export const AboutTeam = () => {
    return (
        <>
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="/Frontend assets/img/team-1.jpg" alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="/Frontend assets/img/team-2.jpg" alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="/Frontend assets/img/team-3.jpg" alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="/Frontend assets/img/team-4.jpg" alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        </>
    )
}