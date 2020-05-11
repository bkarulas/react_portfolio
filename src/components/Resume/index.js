import React, { Component } from 'react';
//import { Container } from 'react-bootstrap';
import './resume.css';
import Pdf from './Boris_Brad_Karulas.pdf';

class Resume extends Component {
    render() {
        return(
            <div style={styles.body}>
                    <div className="resume" style={styles.date}><a href={ Pdf } target='_blank' rel="noopener noreferrer"><i class="fas fa-print"></i>Printable Version</a></div>
                        <p><br /><h1>Boris Brad Karulas</h1><br />
                        <h5>Toronto, Ontario, Canada</h5><br />
                        <h6>Phone: (416)887-3545 | Email: bkarulas@outlook.com</h6></p>
                        <hr />
                        <h3>SUMMARY</h3>
                        <p>
                            Full Stack Web Developer with a background in IT Infrastructure and life-long dedication to learning. 
                            Effective at combining creativity and problem solving to develop user-friendly applications. 
                            Known among staff for strong wit and attention to detail no matter the complexity of the project.</p>
                        <hr />
                        <h3>TECHNICAL SKILLS</h3>
                        <p>
                            <b style={styles.subtitle}>Languages:</b> HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js, ReactJS, PHP <br />
                            <b style={styles.subtitle}>Applications:</b> Microsoft Server, Azure, Exchange, Active Directory, Office 365, Cisco Ironport, Airwatch (MDM)</p>
                        <hr />
                        <h3>EXPERIENCE</h3>
                        <p>
                            <b style={styles.subtitle}>End User Architect</b><span style={styles.date}>March 2018 - Present</span><br />
                            <b>CI Investments</b><span style={styles.date}>Toronto, ON</span><br />
                            Currently involved in all major IT projects and initiatives, supporting end users across the organization. 
                            Responsibilities include, understanding the issue, reached solutions, installation, testing, proof of concept and documentation<br />
                            <i>Key Accomplishments:</i><br />
                            <ul>
                                <li>Project lead on company wide initiative to integrate and upgrade all boardrooms to Microsoft Teams Meeting Room.</li>
                                <li>Contributed to the upgrading efforts to migrate all users to Windows 10. Project included the build of all desktops/laptops and automating a system to move user information to the new device.</li>
                            </ul>
                            <br />
                            <b style={styles.subtitle}>Microsoft Cloud Services</b><span style={styles.date}>December 2016 – March 2018</span><br />
                            <b>CI Investments</b><span style={styles.date}>Toronto, ON</span><br />
                            Responsible for migrating all users (both corporate and branch employees) to Office 365. 
                            We also configured Azure and introduced Skype, Teams, Intune and OneDrive to the business.<br />
                            <i>Key Accomplishments:</i><br />
                            <ul>
                                <li>We developed and application that assisted with the migration. Users were able to schedule a time a date to be migrated, then during the migration they were able to see the status. This application included the use of JavaScript, HTML, CSS, PHP, PowerShell and SQL Database</li>
                            </ul>
                            <br />
                            <b style={styles.subtitle}>Production Support</b><span style={styles.date}>May 2013 – December 2016</span><br />
                            <b>CI Investments</b><span style={styles.date}>Toronto, ON</span><br />
                            Responsible for support of all Windows Servers including maintenance/patching and 
                            providing third tier support for all internal and external applications.<br />
                            <i>Key Accomplishments:</i><br />
                            <ul>
                                <li>Technical lead for all mail flow products such as Microsoft Exchange, Cisco IronPort and AirWatch(MDM)</li>
                                <li>Member of the Disaster Recovery team that was responsible for recovering all Windows servers and applications in the event of a disaster scenario</li>
                            </ul>
                        </p>
                        <hr />
                        <h3>EDUCATION</h3>
                        <div style={styles.space}>
                            <b style={styles.subtitle}>Full Stack Development Certificate</b><span style={styles.date}>September 2019 – March 2020</span><br />
                            <b>University of Toronto</b><span style={styles.date}>Toronto, ON</span><br />
                        </div>
                        <div style={styles.space}>
                            <b style={styles.subtitle}>Unix Administrator Certificate</b><span style={styles.date}>September 2010 – March 2012</span><br />
                            <b>Seneca College</b><span style={styles.date}>Toronto, ON</span><br />
                        </div>
                        <div style={styles.space}>
                            <b style={styles.subtitle}>Computer Systems Technologies</b><span style={styles.date}>September 2002– March 2005</span><br />
                            <b>Centennial College</b><span style={styles.date}>Toronto, ON</span><br />
                        </div>
                        <div style={styles.space}>
                            <b style={styles.subtitle}>Bachelor of Arts</b><span style={styles.date}>September 1999 – March 2002</span><br />
                            <b>University of Western Ontario</b><span style={styles.date}>London, ON</span>
                        </div>
            </div>
        )
    }
}

const styles = {
    body: {
        width:'70%', 
        margin:'auto', 
        marginTop:'5rem',
        backgroundColor: '#f9f9f9',
        padding: '7px 25px 7px',
        border: '1px solid #adadad',
        borderRadius: '25px'
    },
    subtitle:{
        fontSize: '18px',
    },
    date:{
        float: 'right'
    },
    space:{
        marginBottom: '1.5rem'
    }
}
export default Resume;