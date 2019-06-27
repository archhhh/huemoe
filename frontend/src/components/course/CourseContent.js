import React, {Component} from "react";
import videojs from "video.js";


class CourseContent extends Component{
    componentDidUpdate(){
        if(this.props.content.type === "video"){
            this.player = videojs('my-player');
        }else{
            if (this.player) {
                this.player.dispose()
            }
        }
    }
    componentDidMount(){
        if(this.props.content.type === "video"){
            this.player = videojs('my-player');
        }
    }
    render() {
        return (
            <div className="course-content">
                <div className="course-content-supplementary">
                    <h2 className="course-content-supplementary-title">
                        {this.props.language[this.props.courseLocale].course.supplementaryMaterials}
                    </h2>
                    <ul className="course-content-supplementary-materials">
                        {this.props.content.supplementaryMaterials.map( (material) => 
                            <li><a className="course-content-supplementary-material" href={material.url}>{material.name}</a></li>
                        )}
                    </ul>
                </div>            
                {this.props.content.type === "video" 
                ? (
                    <div className="course-content-video">
                        <h1 className="course-content-video-title">
                            {this.props.content.name}
                        </h1>
                        <video-js id="my-player" class="vjs-matrix video-js vjs-big-play-centered" controls data-setup='{}'>
                                <source src={require("../../assets/"+this.props.content.url)} type="video/mp4" />
                                {this.props.content.subtitles.map((subtitle) => {
                                    return this.props.courseLocale.toLowerCase() === subtitle.lang 
                                        ? <track kind='captions' src={require("../../assets/"+subtitle.url)} srcLang={subtitle.lang} label={subtitle.label} default />
                                        : <track kind='captions' src={require("../../assets/"+subtitle.url)} srcLang={subtitle.lang} label={subtitle.label}/> 
                                    ;
                                })} 
                        </video-js>

                    </div> 
                )
                : <div className="course-content-text" dangerouslySetInnerHTML={{__html: this.props.content.data}}></div>}
                
            </div>
        );
    }

};


export default CourseContent;