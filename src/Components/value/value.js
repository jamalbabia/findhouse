import {  useSelector } from 'react-redux';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import './Value.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Value() {
    

  const accord = useSelector((state) => state.accordion);
  const myaccordion = [
    {
    heading:"One-to-one guidance from a Superhost",
    detail:"We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat."
    },
    {
    heading:"An experienced guest for your first booking",
    detail:"For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb."
    },
    {
    heading:"Specialized support from Airbnb",
    detail:"New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support."
    }
]
  return (
    <section className="v-wrapper">
      <div className="v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="images/moroccan.jpg" alt="" />
          </div>
        </div>
        <div className="v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {myaccordion.map((item, i) => (
              <AccordionItem className={'accordion-item'} key={i} uuid={i}>
                
                  <AccordionItemButton className="accordion-button collapsed">
                    <span className="accordion-header">{item.heading}</span>
                  </AccordionItemButton>
                
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
