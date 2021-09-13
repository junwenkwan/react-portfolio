import "./footer.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
    return (
        <div className="footer">
            <div className="credit">
                <h3>Credits</h3>
                <h3>Plant by S. Sohel</h3>
                <h3>Robot by M. Voloshin</h3>
                <h3>Typing by S. Pasciullo</h3>
                <h3>on LottieFiles</h3>
                <h3>under CC BY 2.0</h3>
            </div>
            <div className="icon">
                <a href={"https://www.linkedin.com/in/junwenkwan/"} target="_blank" rel="noreferrer"><LinkedInIcon className='linkedin' style={{ color: 'white' }}/></a>
                <a href={"mailto:jkwan0001@gmail.com"} target="_blank" rel="noreferrer"><MailIcon className='mail' style={{ color: 'white' }}/></a>
            </div>
        </div>
    )
}
