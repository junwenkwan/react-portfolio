import "./footer.scss"
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <MailIcon className='icon' style={{ color: 'white' }}/>
                <h3>For business inquiries: <br/> jkwan0001@gmail.com</h3>
            </div>
        </div>
    )
}
