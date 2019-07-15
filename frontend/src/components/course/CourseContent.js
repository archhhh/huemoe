import React, {Component} from "react";
import videojs from "video.js";



class CourseContent extends Component{
    componentDidUpdate(){
        if(this.props.content.type === "video")
        {
            if(this.player)
            {
                let videoSrc = this.props.content.url;
                this.player.src({
                    src: videoSrc
                });
                let oldTracks = this.player.remoteTextTracks();
                let i = oldTracks.length;
                while (i--) {
                    this.player.removeRemoteTextTrack(oldTracks[i]);
                }
                let captionsSrc = this.props.content.subtitles[this.props.courseLocale].url;
                this.player.addRemoteTextTrack({
                    kind: 'captions',
                    src: captionsSrc,
                    srcLang: this.props.content.subtitles[this.props.courseLocale].lang,
                    label: this.props.content.subtitles[this.props.courseLocale].label,
                    align: 'center',
                });
            }
            else
                this.player = videojs('my-player');
        }else{
            if (this.player) {
                this.player.dispose();
                this.player = null;
            }
        }
    }
    componentWillUnmount(){
        if (this.player) {
            this.player.dispose();
        }
    }
    componentDidMount(){
        if(this.props.content.type ==="video")
            this.player = videojs('my-player');
    }
    render() {
        return (
            <div className="course-content">
                <div className="course-content-supplementary">
                    <h2 className="course-content-supplementary-title">
                        {this.props.language[this.props.courseLocale].course.supplementaryMaterials}
                    </h2>
                    <ul className="course-content-supplementary-materials">
                        <li>
                            <a className="course-content-supplementary-material" href={this.props.content.supplementaryMaterials}>
                            {this.props.language[this.props.courseLocale].course.download}
                            </a>
                        </li>
                    </ul>
                </div>            
                {this.props.content.type === "video" 
                ? (
                    <div className="course-content-video">
                        <h1 className="course-content-video-title">
                            {this.props.content.name[this.props.courseLocale]}
                        </h1>
                        <video-js id="my-player" class="vjs-matrix video-js vjs-big-play-centered" controls data-setup='{}'>
                                <source src={this.props.content.url} type="video/mp4" />
                                <track kind='captions' src={this.props.content.subtitles[this.props.courseLocale].url} srcLang={this.props.content.subtitles[this.props.courseLocale].lang} label={this.props.content.subtitles[this.props.courseLocale].label} />
                        </video-js>
                    </div> 
                )
                : <div className="course-content-text" dangerouslySetInnerHTML={{__html: this.props.content.data[this.props.courseLocale]}}></div>}
                
            </div>
        );
    }

};


export default CourseContent;