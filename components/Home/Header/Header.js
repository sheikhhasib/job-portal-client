import Image from 'next/image'
import styles from '../../../styles/Header.module.css';

const Header = () => {

    return (
        <>
            <style JSX>{`
                input[type="text"] {
                    width: 100%;
                    border: 2px solid #0080ff;
                    box-shadow:2px 2px 5px #0080ff;
                    border-radius: 4px;
                    outline: none;
                    padding: 8px;
                    box-sizing: border-box;
                    transition: 0.3s;
                    border-radius: 20px;
                }
                
                input[type="text"]:focus {
                    border-color: dodgerBlue;
                    box-shadow: 0 0 8px 0 dodgerBlue;
                }
                .header1 {
                    background: url('/banner/banner.jpg') no-repeat;
                    background-position: center;
                    background-size : cover;
                }
                .inputWithTxt input[type="text"]{
                    padding-left: 60px;
                }
                .inputWithTxt {
                    position: relative;
                  }                  
                .inputWithTxt .inputText {
                    position: absolute;
                    left: 0;
                    top: 0px;
                    padding: 9px 8px;
                    transition: 0.3s;
                  }
                  .searchInput{
                      border
                  }
                
            `}</style>
            <div className="col-md-5 m-auto">
                <form className="my-3">
                    <div className="d-flex">
                        <div className={`inputWithTxt col-md-5 me-3`}>
                            <input type="text" className="form-control searchInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="job title,keyword" />
                            <p className="inputText"> <strong>What</strong> </p>
                        </div>
                        <div className={`inputWithTxt col-md-5 me-3`}>
                            <input type="text" className="form-control searchInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="city,zip code ,state" />
                            <p className="inputText"><strong>Where</strong></p>
                        </div>
                        <div className={`inputWithTxt col-md-5 me-3`}>
                            <button type="submit" className="btn btn-info w-50" style={{ borderRadius: '20px', padding: '8px 0' }} >Find Jobs</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Header;