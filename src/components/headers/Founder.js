import React from 'react'
import "./Founder.css"
import user from "../../images/user.png"

const Founder = () => {
  return ( <section class="founder-vision-section">
    <div class="founder-container">
        <div class="custom-container">
            <div class="custom-container2">
                <div class="founder-content">
                    <h2>From our Founder</h2>
                    <div class="founder-notes">
                        <p>As we reflect on our past accomplishments, we are excited to envision a future of global expansion. The rapid growth of the Indian economy in correlation to the world economy opens doors for us to seize greater business opportunities. With our unwavering determination and commitment to excellence, we are ready to embrace this new chapter and establish our presence on a global scale.</p>
                        <p>Together, let us embark on this journey to bring our vision and values to new horizons.</p>
                      
                        <div>
                            <b>Selvasundaram</b>
                            <p>Chairman</p>
                        </div>
                    </div>
                </div>
                <div class="founder-img">
                    <div>
                    <img src={user} alt="renaatus founder image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>)
}

export default Founder;