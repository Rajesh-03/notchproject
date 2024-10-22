import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import firstvideo from "./images/rmc.mp4"
import c1v from "./images/projectimg/c1/c1.mp4"
import c1a from "./images/projectimg/c1/c1.JPG"
import c1b from "./images/projectimg/c1/c1.1.JPG"
import c2v from "./images/projectimg/c2/c2.MP4"
import c2a from "./images/projectimg/c2/c2.JPG"
import c2b from "./images/projectimg/c2/c2.1.JPG"
import c2c from "./images/projectimg/c2/c2.2.JPG"
import o1v from "./images/projectimg/o1/o1.MP4"
import o1a from "./images/projectimg/o1/o1.JPG"
import o1b from "./images/projectimg/o1/o1.1.JPG"
import o2v from "./images/projectimg/o2/o2.MP4"
import o2a from "./images/projectimg/o2/o2.JPG"
import o2b from "./images/projectimg/o2/o2.1.JPG"
import o2c from "./images/projectimg/o2/o2.2.JPG"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventLandingPage from "demos/EventLandingPage";

import EquipmentCards from "components/headers/TimeLine";
import Openings from "components/headers/openings";
import ProjectDetails from "demos/ProjectDetails";



export default function App() {

 const tabs ={
  Ongoing:[

    {
      project_id: 1,
      videoSrc: firstvideo,
      additionalImages: [
        c1a,
        c1b,
  
      ],
      imageSrc:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
      title: "Overlay and Repairs in Madurai – Kanyakumari Section of NH-7 in the State of Tamil Nadu.",
     
      content: "CUBE Highways, NHAI, PIU – Madurai",
      client: "NHAI PIU, Madurai",
      estimated_cost: "Rs. 59.89 Cr/-"
  },
  {
    project_id: 2,
    videoSrc: o1v,
    additionalImages: [
      o1a,
      o1b,

    ],
    imageSrc:
        "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
    title: "Formation of Bypass to Sivagangai Town branching from km 129/2 of Thanjavur - Manamadurai Road SHU (Sivagangai Urban Stretch) and merging with Thanjavur - Manamadurai Road NH226 (NHAI Road) at km 141/8 (Length 10.80km) Phase 1 - Km 0/0 - 7/6",
    location: "Thanjavur - Manamadurai Road, Tamil Nadu",
    client: "Tamil Nadu Highways Department ",
    content: " merging with Thanjavur - Manamadurai Road NH226 (NHAI Road) at km 141/8 (Length 10.80km) Phase 1 - Km 0/0 - 7/6",
    estimated_cost: "Rs.80,63,24,866 Cr/- inc. GST"
  },
  {
    project_id: 3,
    videoSrc: firstvideo,
    additionalImages: [
      c1a,
      c1b,

    ],
    imageSrc:
    "https://i0.wp.com/complainthub.org/wp-content/uploads/2024/03/Corporation-of-Madurai-Logo.png?fit=720%2C480&ssl=1",
    title: "Replacement of Causeway To High-Level Bridge Across River Vaigai Causeway (Kuruveekaran Salai and Opula Padithurai) With Approach Road Connecting Anna Nagar Main Road To Kamarajar Salai Under I & A Fund- 2019.",
    location: "Trichy Karur Toll Road, Tamil Nadu",
    client: "Reliance Infrastructure Limited",
    supervision: "BOT Concessionaire NHAI",
    content: "Rs. 67.84 Cr/- inc. GST"
},
{
  project_id: 4,
  videoSrc: o2v,
  additionalImages: [
    o2a,
    o2b,
    o2c,
   

  ],
  imageSrc:
  "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
  title: "VUP and PUP at Thanichiyam at Km 414+650",
  location: "Thanichiyam, Tamil Nadu",
  client: "Reliance Infrastructure Limited",
  supervision: "BOT Concessionaire NHAI",
  content: "Rs.34,94,97,801 Cr/- inc. GST"
}
    
  ],
  Completed: [
    {
      project_id: 5,
      videoSrc: c1v,
      additionalImages: [
          c1a,
          c1b,
    
        ],
      imageSrc:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
      title: "Overlay and Repairs in Madurai – Kanyakumari Section of NH-7 in the State of Tamil Nadu.",
     
      content: "CUBE Highways, NHAI, PIU – Madurai",
      client: "NHAI PIU, Madurai",
      estimated_cost: "Rs.36.65 Cr/-"
  },
  {
    project_id: 6,
    videoSrc: c2v,
    additionalImages: [
      c1a,
      c1b,

    ],
    imageSrc:
        "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
    title: "(pending)Formation of Bypass to Sivagangai Town branching from km 129/2 of Thanjavur - Manamadurai Road SHU (Sivagangai Urban Stretch) and merging with Thanjavur - Manamadurai Road NH226 (NHAI Road) at km 141/8 (Length 10.80km) Phase 1 - Km 0/0 - 7/6",
    location: "Namakkal - Karur Toll Road, Tamil Nadu",
    client: "Tamil Nadu Highways Department ",
    content: " Kamarajar Bridge to Varanasi - Kanyakumari road (NH-44) Near Samayanallur (MDU-213)",
    estimated_cost: "Rs. 54.60 Cr/- inc. GST"
  },
  {
    project_id: 7,
    videoSrc:c2v,
    additionalImages: [
      c2a,
      c2b,
      c2c

    ],
    imageSrc:
    "https://i0.wp.com/complainthub.org/wp-content/uploads/2024/03/Corporation-of-Madurai-Logo.png?fit=720%2C480&ssl=1",
    title: "Replacement of Causeway To High-Level Bridge Across River Vaigai Causeway (Kuruveekaran Salai and Opula Padithurai) With Approach Road Connecting Anna Nagar Main Road To Kamarajar Salai Under I & A Fund- 2019.",
    location: "Kuruveekaran Salai and Opula Padithurai, Tamil Nadu",
    client: "Municipal Corporation Madurai",
    supervision: "BOT Concessionaire NHAI",
    content: "Rs.45.64 Cr/- inc. GST"
},
{
  project_id: 8,
  videoSrc: firstvideo,
  additionalImages: [
    c1a,
    c1b,

  ],
  imageSrc:
  "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
  title: "VUP and PUP at Thanichiyam at Km 414+650",
  location: "Trichy Karur Toll Road, Tamil Nadu",
  client: "Reliance Infrastructure Limited",
  supervision: "BOT Concessionaire NHAI",
  content: "Rs. 67.84 Cr/- inc. GST"
}
],
  Signature:  [
    {
      project_id: 9,
      videoSrc: firstvideo,
      additionalImages: [
        c1a,
        c1b,
  
      ],
      imageSrc:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
      title: "Overlay and Repairs in Madurai – Kanyakumari Section of NH-7 in the State of Tamil Nadu.",
     
      content: "CUBE Highways, NHAI, PIU – Madurai",
      client: "NHAI PIU, Madurai",
      estimated_cost: "Rs. 59.89 Cr/-"
  },
  {
    project_id: 10,
    videoSrc: firstvideo,
    additionalImages: [
      c1a,
      c1b,

    ],
    imageSrc:
        "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
    title: "Formation of Bypass to Sivagangai Town branching from km 129/2 of Thanjavur - Manamadurai Road SHU (Sivagangai Urban Stretch) and merging with Thanjavur - Manamadurai Road NH226 (NHAI Road) at km 141/8 (Length 10.80km) Phase 1 - Km 0/0 - 7/6",
    location: "Namakkal - Karur Toll Road, Tamil Nadu",
    client: "Tamil Nadu Highways Department ",
    content: " Kamarajar Bridge to Varanasi - Kanyakumari road (NH-44) Near Samayanallur (MDU-213)",
    estimated_cost: "Rs. 54.60 Cr/- inc. GST"
  },
  {
    project_id: 11,
    videoSrc: firstvideo,
    additionalImages: [
      c1a,
      c1b,

    ],
    imageSrc:
    "https://i0.wp.com/complainthub.org/wp-content/uploads/2024/03/Corporation-of-Madurai-Logo.png?fit=720%2C480&ssl=1",
    title: "Replacement of Causeway To High-Level Bridge Across River Vaigai Causeway (Kuruveekaran Salai and Opula Padithurai) With Approach Road Connecting Anna Nagar Main Road To Kamarajar Salai Under I & A Fund- 2019.",
    location: "Trichy Karur Toll Road, Tamil Nadu",
    client: "Reliance Infrastructure Limited",
    supervision: "BOT Concessionaire NHAI",
    content: "Rs. 67.84 Cr/- inc. GST"
},
{
  project_id: 12,
  videoSrc: firstvideo,
  additionalImages: [
    c1a,
    c1b,

  ],
  imageSrc:
  "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
  title: "VUP and PUP at Thanichiyam at Km 414+650",
  location: "Trichy Karur Toll Road, Tamil Nadu",
  client: "Reliance Infrastructure Limited",
  supervision: "BOT Concessionaire NHAI",
  content: "Rs. 67.84 Cr/- inc. GST"
}


  ]}
 
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
    
          <Route path="/" element={<EventLandingPage />} />
          <Route path="/equipments" element={ <EquipmentCards/>} />
          <Route path="/openings" element={ <Openings/>} />
          <Route path="/project/:projectId" element={<ProjectDetails tabs={tabs} />} />{/* Dynamic Route */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;