import React, { Component } from 'react';
import Cards from './Cards';
import { Row } from 'react-bootstrap';
import './projects.css';
import proimg1 from '../../images/projects/workscheduler.png';
import proimg2 from '../../images/projects/neighbourhoodsafe.png';
import proimg3 from '../../images/projects/notetaker.png';
import proimg4 from '../../images/projects/burger.png';
import proimg5 from '../../images/projects/quizgame.png';
import proimg6 from '../../images/projects/budgettracker.png';

class Projects extends Component {

    state = {
        projectsList: [
          { name: 'Day Planner', img: proimg1, alt: "Project 1",
            info:'The Day Planner uses HTML,CSS and jQuery. The application displays colour coded time blocks indicating the time of day. Each time block contains an input field and a save button that stores the information in local storage.',
            gitLink:'https://github.com/bkarulas/Day-Planner', siteLink:'https://bkarulas.github.io/Day-Planner/'},
          { name: 'Neighbourhood Safety', img: proimg2, alt: 'Project 2',
            info:'The Neighbourhood Safety application makes an API call to the Toronto Police Public Safety Data Portal.  Here you can search and compare year to year data for all major crimes in a particular neighbourhood, or compare 2 different neighbourhoods.',
            gitLink:'https://github.com/andydurette/UFT-Project-1', siteLink:'https://andydurette.github.io/UFT-Project-1/'},
            { name: 'Note Taker', img: proimg3, alt: 'Project 3',
            info:'The Note Taker application is designed using express backend and it also saves and retrieve note data from a JSON file. In this application users have the ability to write new notes and save them, and they can also delete old notes.',
            gitLink:'https://github.com/bkarulas/Note-Taker', siteLink:'https://ancient-chamber-02851.herokuapp.com'},
          { name: 'Burger Logger', img: proimg4, alt: 'Project 4',
            info:'The Burger Logger is an application designed with MySQL, Node, Express, Handlebars and a homemade ORM. Node and MySQL query and route data while Handlebars generate the HTML. In this application users can add new burgers to the menu, then move them to a devoured section once they have be eaten.',
            gitLink:'https://github.com/bkarulas/burger', siteLink:'https://karulasburger.herokuapp.com'},
          { name: 'Quiz Journey', img: proimg5, alt: 'Project 5',
            info:'Quiz Journey application is designed using express, express-handlebars, mysql2, and sequelize Node.js modules. This application is to make education topics fun for learning through a game for students. Players can create multiple characters and save their game to be continued at a later time.',
            gitLink:'https://github.com/Winyumi/quiz-journey', siteLink:'https://quiz-journey.herokuapp.com'},
          { name: 'Offline/Online Budget', img: proimg6, alt: 'Project 6',
            info:'Offline/Online Budget application is designed using service workers, express and sequelize Node.js modules. In this application, users can add expenses and deposits to the budget with or without a connection. When they enter transactions offline, they are still able to populate the total.',
            gitLink:'https://github.com/bkarulas/Online-Offline-Budget-Trackers', siteLink:'https://pwabudgettrackers.herokuapp.com'}
        ]
      }

      
    render() {
        return(
            <div className="projectbody">
                  <Row>
                      {this.state.projectsList.map( project => (
                          <Cards
                              name={project.name}
                              img={project.img}
                              alt={project.alt} 
                              info={project.info}
                              gitLink={project.gitLink}
                              siteLink={project.siteLink}
                          />
                      ))}
                  </Row>
            </div>
        )
    }
}

export default Projects;