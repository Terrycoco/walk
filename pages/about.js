import React, {Component} from 'react';
import Nav from 'components/Nav';
import withRedux from 'next-redux-wrapper';
import initStore from 'root/store';
import withMui from 'components/hocs/withMui';
import { bindActionCreators } from 'redux';
import Shell from 'components/Shell';
import {getVer} from 'utils/config';
import Spacer from 'components/Misc/Spacer';

class About extends Component {
  static async getInitialProps(ctx) {
    const {req} = ctx;
    const {store} = ctx;
    const {isServer} = ctx;
  }
  
  componentDidMount()  {
    // this.props.toggleMenu(false);
   }

  componentWillMount() {

  }


  render() {
    return (
    <Shell pageTitle="About Sharewalks">
     <div className="CONTENT">
         <div className="COLUMN-1">
          <div className="FORM">
           
             <h4>Mission</h4>
                <h5>Walk  Learn  Share</h5>

             <h4>Founder </h4>   
                <h5>Terry Marr</h5>
              
               <p>ShareWalks has grown out of my two passions: <strong>Travel</strong> and <strong>Learning</strong>. I believe the best way to get to know a place is to <b>explore it on foot</b>. That means neighborhood by neighborhood. While guide books always hit the major, touristy sights, they are often lacking in information about where the locals live, work, eat, drink and meet each other.  I always wished I had a local resident who could take me around and teach me about their neighborhood.</p>
               <p>It is my hope that ShareWalks will fill in that gap, by allowing anyone to create walks on any topic that interests them, such as local history, friendliest watering holes, notable architecture, where to find the best food, etc.   </p>
              

               <p>This project is under construction.  If you like what you see, we'd love to hear from you!</p>
               
               <p><a href= "mailto:sharewalks1@gmail.com">Contact Us</a></p>
              </div>
         
          </div>
          <div className="COLUMN-2">
            <div className="FORM">
               <h4>Version</h4>
               <h5>{getVer()}</h5>
               <h4>Credits</h4>
               <p>Built Using:  React, Redux, Leaflet, Node and Postgres</p>

               <small><ul className="credits">
               <li>Map Tiles: &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012</li>
               <li>Footprint Icon: <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>. </li>
               <li>Headphone Icon: <a href="http://www.flaticon.com/authors/hanan" title="Hanan">Hanan</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.  </li>
               <li>Target Icon:<a href="http://www.flaticon.com/authors/daniel-bruce" title="Daniel Bruce">Daniel Bruce</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.  </li>
               <li>Home Icon: <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>. </li>
              <li>Road Icon: <a href="https://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>. </li>
            </ul></small>
            <Spacer />
          </div>
        </div>
       </div>
<style jsx>{`

p {
  line-height: 1.4;
}

h4 {
  margin-bottom: 0;
}

h4 + h5 {
 margin-top: 0;
}

h4 + p {
  margin-top: .5em;
}

.credits li {
    list-style-type: none;
    margin-bottom: .5em;
    line-height: 1.2;
  }
 small {
  line-height: 1;
 }
`}</style>
    </Shell>
    );
   }
}

function mapStateToProps(state) {
  return {
    browser: state.browser,
    height: state.app.height,
    width: state.app.width,
    textValue: state.app.textValue,
    currentRoute: state.nav.currentRoute
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(withMui(About));
