import React, {Component} from "react";


class CourseNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            openWeeks: new Array(this.props.content.length).fill(false),
        };
    }
    toggleMenu = () => {
        this.setState({
            open: !this.state.open,
        });
    }
    toggleWeek = (i) => {
        this.setState({
            openWeeks: this.state.openWeeks.map( (item, index) => 
                index === i ? !item : false
            ),
        });
    }
    pickActive = ( active ) => {
        this.props.pickActive(active);
        this.toggleMenu();
        this.toggleWeek( active.x );
    };
    render(){
        return (
            <div className="course-nav">
                <div className="course-nav-menu">
                    <p className={this.state.open ? "course-nav-menu-active-title open":"course-nav-menu-active-title"} onClick={this.toggleMenu}>
                        {this.props.language[this.props.courseLocale].course.week} {this.props.active.x+1}: {this.props.content[this.props.active.x][this.props.active.y].name}
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
                                        ? <li className="course-nav-menu-dropdown-day-item active" x={i} y={j}>{dailyContent.name}</li> 
                                        : <li className="course-nav-menu-dropdown-day-item" x={i} y={j}>{dailyContent.name}</li>
                                    )}
                                </ul>
                            </li>    
                        )}
                    </ul>
                </div>
            </div>
        );
    };
};

export default CourseNav;