import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';

import { faFacebook, faPaypal , faAmazonPay, faAlipay, faPhoenixSquadron} from '@fortawesome/free-brands-svg-icons';
class About extends Component {
    render (){
        return(
            <div className='body-about'>
                <h4>About <FontAwesomeIcon icon={faHome}></FontAwesomeIcon></h4> 
               
                <p>Get payed by the following</p> 
                <div className='infor'>
                <div className='grid'>
                    <div>
                        <FontAwesomeIcon icon={faPaypal}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faAmazonPay}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhoenixSquadron}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faAlipay}/>
                    </div>
                </div>
                    
                <p>Our facebook is always waiting to show you our Blog and how you can Create and cell blog <FontAwesomeIcon icon={faFacebook}/></p>
                </div>
            </div>
        )
    }
}
export default About;