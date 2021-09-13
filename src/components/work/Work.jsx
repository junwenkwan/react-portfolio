import "./work.scss"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';

export default function Work() {
    return (
        <div className="work">
            <h1>Work Experience</h1>

            <VerticalTimeline layout={"1-column-left"}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#202124', color: '#fff' }}
                    iconStyle={{ background: '#202124', color: '#fff' }}
                    icon={<WorkIcon/>}
                >
                    <h2 className="vertical-timeline-element-company">Ideas at Sea (IAS APAC)</h2>
                    <h3 className="vertical-timeline-element-title">Graduate Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Williamstown, Victoria, Australia</h4>
                    <h4 className="vertical-timeline-element-subtitle">Mar 2021 - Sep 2021</h4>
                    <p>Develop deep learning solutions for object detection and classification from high-resolution imagery</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#202124', color: '#fff' }}
                    iconStyle={{ background: '#202124', color: '#fff' }}
                    icon={<WorkIcon/>}
                >
                    <h2 className="vertical-timeline-element-company">Independent Contractor</h2>
                    <h3 className="vertical-timeline-element-title">Junior Deep Learning Consultant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Clayton, Victoria, Australia</h4>
                    <h4 className="vertical-timeline-element-subtitle">Sep 2020 - May 2021</h4>
                    <p>Design deep learning algorithms to recognize defects in metal 3D printing</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#202124', color: '#fff' }}
                    iconStyle={{ background: '#202124', color: '#fff' }}
                    icon={<WorkIcon/>}
                >
                    <h2 className="vertical-timeline-element-company">Monash University</h2>
                    <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Clayton, Victoria, Australia</h4>
                    <h4 className="vertical-timeline-element-subtitle">Dec 2019 - Dec 2020</h4>
                    <p>Collaborated with Australian Centre for Robotic Vision (ACRV) to develop a Franka-Emika Panda robotic arm</p>
                </VerticalTimelineElement>
                
                </VerticalTimeline>
        </div>
    )
}
