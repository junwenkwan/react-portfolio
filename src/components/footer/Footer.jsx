import "./footer.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
    return (
        <div className="footer">
            <div className="credit">
                <h3>Credits</h3>
                <h3>Loading by J. Bulle</h3>
                <h3>Robot by M. Voloshin</h3>
                <h3>Laptop by V. Sontakke</h3>
                <h3>on LottieFiles</h3>
                <h3>under CC BY</h3>
            </div>
            <div className="iconList">
                <a href={"https://www.linkedin.com/in/junwenkwan/"} target="_blank" rel="noreferrer"><LinkedInIcon className='icon' style={{ color: 'white' }}/></a>
                <a href={"https://github.com/junwenkwan"} target="_blank" rel="noreferrer"><GitHubIcon className='icon' style={{ color: 'white' }}/></a>
                <a href={"mailto:jkwan0001@gmail.com"} target="_blank" rel="noreferrer"><MailIcon className='icon' style={{ color: 'white' }}/></a>
            </div>
        </div>
    )
}
