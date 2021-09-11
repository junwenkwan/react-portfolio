import "./footer.scss"
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
    return (
        <div className="footer">
            <div className="credit">
                <h3>Credits<br/>Plant by Sheikh Sohel on LottieFiles<br/>Robot by Mikhail Voloshin on LottieFiles<br/>Typing by Santiago Pasciullo on LottieFiles</h3>
            </div>
            <div className="wrapper">
                
                <h3>For business inquiries: jkwan0001@gmail.com</h3>
                <MailIcon className='icon' style={{ color: 'white' }}/>
            </div>
        </div>
    )
}
