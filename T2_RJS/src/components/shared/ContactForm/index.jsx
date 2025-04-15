export default function ContactForm() {
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Text */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2>Contact us</h2>
                            <p>
                                Need to get in touch with us? Either fill out the form with your inquiry or find the 
                                <a href="#" className="text-decoration-underline"> department email </a>
                                you'd like to contact below.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <div className="col-md-6">
                            <div className="contact-box">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label className="form-label">First name*</label>
                                            <input type="text" className="form-control" placeholder="First name" required />
                                        </div>
                                        <div className="col">
                                            <label className="form-label">Last name</label>
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email*</label>
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">What can we help you with?</label>
                                        <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
