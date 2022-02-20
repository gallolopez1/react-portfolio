import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

function Footer(props) {
    return (
        <footer className='d-flex justify-content-center flex-column'>
            <div>
                <p>
                    Designed and Built by Gabriel Gallo Lopez &copy; 2022
                </p>
            </div>
            <div className='d-flex align-items-baselin pb-0'>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(231,231,231,0)" iconSize="5" roundness="25%" url="https://www.instagram.com/ggallolopez/" size="30" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(231,231,231,0)" iconSize="5" roundness="25%" url="https://github.com/gallolopez1" size="30" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(231,231,231,0)" iconSize="3" roundness="25%" url="https://www.linkedin.com/in/gabriel-gallo-lopez/" size="30" />
            </div>
        </footer>
    );
}
export default Footer;