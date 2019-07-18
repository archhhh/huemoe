import React, {Component} from "react";


class CourseNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            openWeeks: new Array(this.props.content.length).fill(false),
            language: false,
        };
    }
    componentDidUpdate = (prevProps) => {
        if(prevProps.content.length != this.props.content.length){
            this.setState({
                openWeeks: new Array(this.props.content.length).fill(false),
            });
        }
    }
    toggleMenu = () => {
        this.setState({
            open: !this.state.open,
            language: false,
        });
    }
    toggleWeek = (i) => {
        this.setState({
            openWeeks: this.state.openWeeks.map( (item, index) => 
                index === i ? !item : false
            ),
        });
    }
    toggleLanguage = (toggle) => {
        this.setState({
            language: toggle,
            open: false,
        });
    }
    pickActive = ( active ) => {
        this.props.pickActive(active);
        this.toggleMenu();
        this.toggleWeek( active.x );
    };
    render(){
        let languages = [];
        this.props.supportedLanguages.map((item) => {
            if(item !== this.props.courseLocale)
                languages.push(
                    <li key={item} className="language-dropdown-link" onClick={() => this.props.courseLocaleChange(item)}>{item}</li>
                );
        });
        return (
            <div className="course-nav">
                <div className="course-nav-menu">
                    <p className={this.state.open ? "course-nav-menu-active-title open":"course-nav-menu-active-title"} onClick={this.toggleMenu}>
                        {this.props.language[this.props.courseLocale].course.week} {this.props.active.x+1}: {this.props.content[this.props.active.x][this.props.active.y].name[this.props.courseLocale]}
                    </p>
                    <ul className={this.state.open ? "course-nav-menu-weeks open": "course-nav-menu-weeks"}>
                        {this.props.content.map((weeklyContent, i) => 
                            <li className="course-nav-menu-dropdown-week">
                                <p 
                                    className={this.state.openWeeks[i] ? "course-nav-menu-dropdown-week-number open": "course-nav-menu-dropdown-week-number"} 
                                    onClick={() => {this.toggleWeek(i)}}
                                >
                                    {this.props.language[this.props.courseLocale].course.week} {i+1}
                                </p>
                                <ul 
                                    className={this.state.openWeeks[i] ? "course-nav-menu-dropdown-days open" : "course-nav-menu-dropdown-days"} 
                                    onClick={(e) => {this.pickActive({x: Number(e.target.getAttribute("x")), y: Number(e.target.getAttribute("y"))})}}
                                >
                                    {weeklyContent.map((dailyContent, j) => 
                                        i === this.props.active.x && j == this.props.active.y
                                        ? <li className="course-nav-menu-dropdown-day-item active" x={i} y={j}>{dailyContent.name[this.props.courseLocale]}</li> 
                                        : <li className="course-nav-menu-dropdown-day-item" x={i} y={j}>{dailyContent.name[this.props.courseLocale]}</li>
                                    )}
                                </ul>
                            </li>    
                        )}
                    </ul>
                </div>
                <div className="course-language">
                    <p onClick={() => {this.toggleLanguage(!this.state.language)}}>{this.props.courseLocale}</p>
                    { languages.length !== 0 && (
                        <ul onClick={() => {this.toggleLanguage(false)}} className={this.state.language ? "language-dropdown-open" : "language-dropdown-closed"}>
                            {languages}
                        </ul>
                    )}
                    
                </div>
            </div>
        );
    };
};

export default CourseNav;