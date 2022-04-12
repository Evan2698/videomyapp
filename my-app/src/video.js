import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery'
import AdsComponent from './googlead.js'


class VideoCore extends React.Component {

    showLoadingProgress(isShow) {
        if (isShow) {
            $("#parsecontrol").show();
        } else {
            $("#parsecontrol").hide();
        }
    }

    getQueryString(url, name) {
        let index = url.indexOf(name + "=");
        if (index === -1) return null
        var value = url.substring(index + name.length + 1);
        return value === "" ? null : value;
    }

    stopPlayAtion() {
        if (window.dp !== undefined) {
            window.dp.pause();
            window.dp.destroy();
            window.dp = undefined;
        }
    }


    okPlay() {
        this.stopSelfPlayer();
        let a = document.getElementById("url").value;
        let b = document.getElementById("jk");
        let c = document.getElementById("jk").selectedIndex;
        let d = b.options[c].value;
        let e = document.getElementById("player");
        e.src = d + a;
    }

    parseURLString(fullURL) {
        if (fullURL.indexOf("qq.com") !== -1) {
            let qqURL = decodeURIComponent(fullURL);
            if (qqURL.indexOf("mreferrer=") !== -1) {
                var mrefer = this.getQueryString(qqURL, "mreferrer");
                return mrefer
            } else {
                return fullURL;
            }
        }
        return fullURL;
    }


    queryVideoParseResult(videoURL, doFunc) {
        this.showLoadingProgress(true);
        var t0 = performance.now();
        var hr = {
            "url": videoURL
        }

        $.ajax({
            type: "POST",
            url: "/bilib",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(hr),
        }).done(data => {
            this.showLoadingProgress(false);
            var t1 = performance.now();
            document.getElementById("jk").selectedIndex = 0;
            if (videoURL.indexOf("bilibili.com") !== -1) {
                document.getElementById("jk").selectedIndex = 4;
            }
            if (videoURL.indexOf("iqiyi.com") !== -1) {
                document.getElementById("jk").selectedIndex = 1;
            }

            if (doFunc) {
                doFunc();
            }
            if (data.success === 1 && 200 === data.code) {
                $("#player").hide();

                $("#videowrapper").css("display", "flex");
                $("#videowrapper").css("display", "-webkit-flex");
                $("#videowrapper").css("justify-content", "center");
                $("#videowrapper").show();
                window.playAction(data.url);
            } else {
                this.okPlay();
            }
            console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
        }).fail(data => {
            this.showLoadingProgress(false);
            document.getElementById("jk").selectedIndex = 0;
            if (videoURL.indexOf("bilibili.com") !== -1) {
                document.getElementById("jk").selectedIndex = 4;
                if (videoURL.indexOf("/bangumi/play/") !== -1) {
                    document.getElementById("jk").selectedIndex = 6;
                }

            }
            if (videoURL.indexOf("iqiyi.com") !== -1) {
                document.getElementById("jk").selectedIndex = 1;
            }

            this.okPlay();
        });
    }

    handleClick = () => {
        let b = document.getElementById("jk");
        let c = b.selectedIndex;
        let d = b.options[c].value + "";
        if (d.startsWith("EEE://") || d.startsWith("eee://")) {
            this.stop3rdPlayer();
            this.stopSelfPlayer();
            let a = document.getElementById("url").value;
            if (a === 'undefined' || !a || !/[^\s]/.test(a)) {
                console.log("fuck u !!!");
            }
            else {
                this.queryVideoParseResult(a, function () {
                    var parents = document.getElementById("jk");
                    parents.selectedIndex = parents.options.length - 1;
                });
            }
        }
        else {
            this.okPlay();
        }
    }

    stop3rdPlayer() {
        let e = document.getElementById("player");
        if (e) {
            e.src = "";
        }
    }

    stopSelfPlayer() {
        this.stopPlayAtion();
        this.showLoadingProgress(false);

        if (!$("#player").is("visible")) {
            $("#player").show();
        }
        $("#videowrapper").hide();
    }


    componentDidMount() {

        let rawURL = this.getQueryString(window.location.href, "zwx");
        if (rawURL === null || rawURL.length === 0) {
            document.getElementById("jk").selectedIndex = 0;
            this.okPlay();
            return
        }

        let playurl = this.parseURLString(rawURL);
        document.getElementById("url").value = playurl;
        document.getElementById("jk").selectedIndex = 0;
        if (playurl !== null) {
            if (playurl.indexOf("bilibili.com") !== -1) {
                document.getElementById("jk").selectedIndex = 4;
                if (playurl.indexOf("/bangumi/play/") !== -1) {
                    document.getElementById("jk").selectedIndex = 6;
                }
            }
            if (playurl.indexOf("iqiyi.com") !== -1) {
                document.getElementById("jk").selectedIndex = 1;
            }
            this.queryVideoParseResult(playurl);
        } else {
            document.getElementById("jk").selectedIndex = 0;
            this.okPlay();
        }
    }

    playchinese = (o) => {

        this.stopPlayAtion();
        this.showLoadingProgress(false);
        this.stop3rdPlayer();
        this.stopPlayAtion();
        $("#videowrapper").show();
        $("#my-player").show();
        $("#player").hide();
        window.playAction("https://vod.bunediy.com/20210215/V28W5ti9/index.m3u8");
        $("#my-player").css("height", "96%");
        $("videowrap").css("height", "96%");

    }


    render() {

        return (
            <div className='container zoom'>

                <AdsComponent />

                <div className='container text-center' style={{ 'padding': '5px 0px 10px 0px' }}>

                    <button type="button" className="btn link-button" onClick={this.playchinese} style={{ "color": "rgb(16, 241, 230)", "background": "#1a1c1d", "fontSize": "16px", "textDecoration": "underline" }}>
                        唐探3 </button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ 'color': 'rgb(16, 241, 230)', 'fontSize': '16px', 'whiteSpace': 'normal nowrap' }} >
                        <a style={{ 'color': 'rgb(16, 241, 230)', 'textDecoration': 'underline"' }} href="//chinese-elements.com/static/app-arm64-release.apk">Android APK &nbsp;(<b
                            style={{ 'color': 'rgb(16, 241, 230)', 'textDecoration': 'underline' }}>02/03更新</b>)</a>
                    </span> &nbsp;&nbsp;若解析不到，请手工切换线路。


                </div>

                <div className='container zoom' >
                    <div id="jxa" className='jxl' >

                        <div id="videowrapper" className="videowrap zoom">
                            <div id="parsecontrol" className="shadow zoom">
                                <p>正在解析........</p>
                            </div>
                            <div id="my-player" className='zoom'></div>
                        </div>
                        <iframe src="" id="player" width="100%" height="100%" title="fucku"
                            className='videoeara zoom' color="#C8DFEA"
                            allowtransparency="true" scrolling="no" allowFullScreen="True" frameBorder="0">
                        </iframe>
                    </div>

                    <div className="container zoom">


                        <div className="input-group mb-3" style={{ "paddingTop": "10px" }} >
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">切换线路:</span>
                            </div>
                            <select className="form-control input-lg" id="jk">
                                <option value="https://z1.m1907.cn/?jx=">默认线路(腾讯 爱奇艺 优酷 乐视 芒果 搜狐)</option>
                                <option value="https://vip.fxw.la/m3u8/index.php?url=">爱奇艺 优酷(第一源)</option>
                                <option value="https://www.ckplayer.vip/jiexi/?url=">爱奇艺 优酷(第二源)</option>
                                <option value="https://okjx.cc/?url=">B站(第一源)</option>
                                <option value="https://www.ckplayer.vip/jiexi/?url=">B站(第二源)</option>
                                <option value="https://vip.bljiex.com/?v=">全站</option>
                                <option value="https://www.h8jx.com/jiexi.php?url=">B 站小新</option>
                                <option value="EEE://">本站内置解析^_^</option>
                            </select>
                        </div>


                        <div className="input-group mb-3" >
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">播放地址:</span>
                            </div>
                            <input className="form-control" type="search" placeholder="电脑使用Ctrl+V粘贴网址-手机直接长按粘贴网址" id="url" aria-label="url" autoComplete="off" aria-describedby="basic-addon1" />
                        </div>

                        <div className='input-group mb-3'>
                            <button id="bf" type="button" className="btn btn-success btn-lg btn-block" onClick={this.handleClick}>Go-点击开始解析</button>
                        </div>

                    </div>

                </div>


                <AdsComponent />

            </div>

        );
    }


}

export default VideoCore;
