
import Link from 'next/Link';
const Navbar = () => {

    const style = {
        tomato: 'tomato',
    }
    return (
        <div className="col-md-9 m-auto">
            <nav className="navbar navbar-expand-lg navbar-light mt-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item ms-4">
                                <span className="nav-link active">
                                    <Link href="#">Home</Link>
                                </span>
                            </li>
                            <li className="nav-item  ms-4">
                                <span className="nav-link active">
                                    <Link href="#">About</Link>
                                </span>

                            </li>
                            <li className="nav-item ms-4">
                                <span className="nav-link active">
                                    <Link href="#">Candidates</Link>
                                </span>
                            </li>
                            <li className="nav-item ms-4">
                                <span className="nav-link active">
                                    <Link href="#">Blog</Link>
                                </span>
                            </li>
                            <li className="nav-item ms-4">
                                <span className="nav-link active">
                                    <Link href="#">Contact</Link>
                                </span>
                            </li>
                            <li className="nav-item ms-4">
                                <button type="button active" className="btn btn-primary px-3" style={{borderRadius:'20px' }} >Post a Job</button>
                            </li>
                            <li className="nav-item ms-4">
                                <button type="button active" className="btn px-3" style={{ backgroundColor: 'tomato',borderRadius:'20px' }} >Want a Job</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;