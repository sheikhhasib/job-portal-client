import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <div>
            <hr />
            <div className="col-md-10 m-auto">
                <div className="row my-4">
                    <div className="col-md-3">
                        <img className="w-100" src="https://i.pinimg.com/originals/f0/92/a4/f092a4e044a6cb80b02e6d7716d84566.jpg" alt="" />
                    </div>
                    <div className="col-md-3">
                        <h5>Halal mart</h5>
                        <ul className={`${styles.ulFooter}`}>
                            <li>About / Press</li>
                            <li>Awards</li>
                            <li>Blog</li>
                            <li>Research</li>
                            <li>Guides</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Employers</h5>
                        <ul className={`${styles.ulFooter}`}>
                            <li>About / Press</li>
                            <li>Awards</li>
                            <li>Blog</li>
                            <li>Research</li>
                            <li>Guides</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Community</h5>
                        <ul className={`${styles.ulFooter}`}>
                            <li>About / Press</li>
                            <li>Awards</li>
                            <li>Blog</li>
                            <li>Research</li>
                            <li>Guides</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 m-auto">
                    <p className={`d-inline ms-5 ${styles.footerIconGoogle}`}><i className="fab fa-google"></i></p>
                    <p className={`d-inline ms-5 ${styles.footerIconFacebook}`}><i class="fab fa-facebook-f"></i></p>
                    <p className={`d-inline ms-5 ${styles.footerIconTwitter}`}><i className="fab fa-twitter"></i></p>
                    <p className={`d-inline ms-5 ${styles.footerIconInstagram}`}><i className="fab fa-instagram"></i></p>
                </div>
            </div>
            <hr />
            <div className="text-center">
                <p>©2020 All rights reserved | This software is made with by NESH SOFT</p>
            </div>
        </div>
    );
};

export default Footer;