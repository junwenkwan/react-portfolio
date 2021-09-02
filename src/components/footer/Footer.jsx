import "./footer.scss"
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
    return (
        <div className="footer">
            <div className="credit">
                <h3>Credits<br/>Rocket animation by Lex Komkov on LottieFiles<br/>Robot animation by Mikhail Voloshin on LottieFiles<br/>Typing animation by Santiago Pasciullo on LottieFiles</h3>
            </div>
            <div className="wrapper">
                
                <h3>For business inquiries: jkwan0001@gmail.com</h3>
                <MailIcon className='icon' style={{ color: 'white' }}/>
            </div>
        </div>
    )
}
