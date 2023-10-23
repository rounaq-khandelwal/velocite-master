 import config from '../../translation/config'
 import * as React from 'react';

const HeaderLogin  = () => {
    return(
        <div style={{position: 'relative'}}>  
            <h3 style={{color:'#4A536D', fontFamily:'Proxima-heading', textAlign:'center'}}>{config.loginHeading}</h3>
        </div>
    )
};

export default HeaderLogin;