import { FrontendLayout } from "../layout/frontend/layout";
import { AboutHero } from "../pages/Frontend/about/abouthero";
import { AboutPart } from "../pages/Frontend/about/aboutpart";
import { AboutTeam } from "../pages/Frontend/about/aboutteam";
import { BookingHero } from "../pages/Frontend/booking/bookinghero";
import { BookingReservation } from "../pages/Frontend/booking/bookingreserve";
import { ContactHero } from "../pages/Frontend/contact/contacthero";
import { ContactInfo } from "../pages/Frontend/contact/Contactinfo";
import { Aboutsection } from "../pages/Frontend/Homepage/aboutsection";
import { HomeBanner } from "../pages/Frontend/Homepage/Homebanner";
import { Menu} from "../pages/Frontend/Homepage/menu";
import { Reservation } from "../pages/Frontend/Homepage/reservation";
import { Services } from "../pages/Frontend/Homepage/services";
import { Team } from "../pages/Frontend/Homepage/team";
import { Testimonal } from "../pages/Frontend/Homepage/testimonal";
import { ServiceHero } from "../pages/Frontend/services/servicehero";
import { ServiceInfo } from "../pages/Frontend/services/servicesinfo";
import { TeamMembers } from "../pages/Frontend/team/teammembers";
import { TeamHero } from "../pages/Frontend/team/teamhero";
import { MenuHero } from "../pages/Frontend/Menu/menuhero";
import { TestimonalHero } from "../pages/Frontend/testimonials/testhero";
import { Testimonals } from "../pages/Frontend/testimonials/testimonals";
export const FrontendRoute= [
    {
        element:<FrontendLayout/>,
        children:[
            {
                path: "/",
                element:(
                    <>
                    <HomeBanner/>
                    <Services/>
                    <Aboutsection/>
                    <Menu/>
                    <Reservation/>
                    <Team/>
                    <Testimonal/>
                    </>
                ),
            },
            {
                path: "/about",
                element:(
                    <>
                    <AboutHero/>
                    <AboutPart/>
                    <AboutTeam/>
                    </>
                ),  
            },
            {
                path: "/booking",
                element:(
                    <>
                    <BookingHero/>
                    <BookingReservation/>
                    </>
                ),  
            },
            {
                path: "/contact",
                element:(
                 <>
                 <ContactHero/>
                 <ContactInfo/>
                 </>
                ),  
            },
            {
                path: "/menu",
                element:(
                 <>
                 <MenuHero/>
                 <Menu/>
                 </>
                ),  
            },
            {
                path: "/service",
                element:(
                 <>
                 <ServiceHero/>
                 <ServiceInfo/>
                 </>
                ),  
            },
            {
                path: "/team",
                element:(
                 <>
                 <TeamHero/>
                 <TeamMembers/>
                 </>
                ),  
            },
            {
                path: "/Testimonal",
                element:(
                 <>
                 <TestimonalHero/>
                 <Testimonals/>
                 </>
                ),  
            },
        ]
    },
 ]
