
const RecentJobs = () => {
    return (
        <div className="col-md-9 m-auto">
            <div className="row">
                <div className="col-md-8 me-5">
                    <div className="my-5">
                        <p style={{ color: 'gray' }}>Recently Added Jobs</p>
                        <h2><strong>Hot Jobs</strong></h2>
                    </div>
                    <div className="my-5">
                        <div className="d-flex">
                            <h3>Frontend Development</h3>
                            <p className="btn btn-primary ms-4" style={{ borderRadius: '20px' }}>Partime</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div className="d-flex">
                                    <i className="fal fa-angle-double-down"></i>
                                    <p className="ms-2"> GOOGLE, INC</p>
                                </div>
                                <div className="d-flex ms-5">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p className="ms-2">Dhaka</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="mx-4" style={{ backgroundColor: 'tomato', borderRadius: '50%', padding: '0px 12px' }}>
                                    <i style={{ marginTop: '12px', color: 'white' }} className="fas fa-heart"></i>
                                </div>
                                <button className="btn btn-primary px-4" style={{ borderRadius: '20px' }}>Apply Job</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="my-5">
                        <p style={{ color: 'gray' }}>Recruitment agencies</p>
                        <h2><strong>Top Recruitments</strong></h2>
                    </div>
                    <div class="card rounded-0 my-4">
                        <img style={{ height: '100px', width: '100px', margin: 'auto' }} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Google</h5>
                        </div>
                        <div class="card-footer py-4" style={{ backgroundColor: 'lightGray' }} >
                            <p>Google Company</p>
                        </div>
                    </div>
                    <div class="card rounded-0 my-4">
                        <img style={{ height: '100px', width: '100px', margin: 'auto' }} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Google</h5>
                        </div>
                        <div class="card-footer py-4" style={{ backgroundColor: 'lightGray' }} >
                            <p>Google Company</p>
                        </div>
                    </div>
                    <div class="card rounded-0 my-4">
                        <img style={{ height: '100px', width: '100px', margin: 'auto' }} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Google</h5>
                        </div>
                        <div class="card-footer py-4" style={{ backgroundColor: 'lightGray' }} >
                            <p>Google Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentJobs;