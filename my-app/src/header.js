import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import 'bootstrap/dist/js/bootstrap.js';
import  VideoCore  from './video.js'


class HeaderContainer extends React.Component {

    render() {
        return (
            <div className="container-fluid zoom">

                <div className="container-fluid zoom" >

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">视频解析</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">时  光<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/static/ch.html">电视频道</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <button type="button"  className="btn link-button nav-link dropdown-toggle text-light border-0"  id="navbarDropdownMenuLink"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    视频网站</button>
                                    <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item text-warning" target="_" href="https://v.qq.com/">腾讯视频</a>
                                        <a className="dropdown-item text-warning" target="_" href="https://www.iqiyi.com/">爱奇艺</a>
                                        <a className="dropdown-item text-warning" target="_" href="https://www.youku.com/">优酷</a>
                                        <a className="dropdown-item text-warning" target="_" href="https://www.le.com/">LeTv</a>
                                        <a className="dropdown-item text-warning" target="_" href="https://www.mgtv.com/">芒果</a>
                                        <a className="dropdown-item text-warning" target="_" href="https://www.tudou.com/">土豆</a>
                                        <a className="dropdown-item text-warning" target="_" href="https://tv.sohu.com/">搜狐TV</a>
                                        <a className="dropdown-item text-warning" target="_" href="https://www.pptv.com/">PPTV</a>

                                        
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    <VideoCore />

                </div>


            </div>
        );
    }
}

export default HeaderContainer;

