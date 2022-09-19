import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay ,faFile,faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCirclePlay, faFile, faCheck);
function PeiceMaker(props) {
  const view = props.data.items.map((el) => {
    return (
      <div key={el.id} className="info-holder">
        <div className="accordion-child">
          {(el.item_type === "quiz") ? <FontAwesomeIcon icon="fa-solid fa-check" /> : null}
          {(el.item_type === "file")?(<FontAwesomeIcon icon="fa-solid fa-file" />) :null }
          {(el.item_type === "lecture")?(<FontAwesomeIcon icon="fa-solid fa-circle-play" />) :null}
        </div>
        <div className="accordion-child middle">{el.title}</div>
        <div className="accordion-child">{el.content_summary}</div>
      </div>
    );
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h4>{props.data.title}</h4>
      </AccordionSummary>
      <AccordionDetails>
        {view}
      </AccordionDetails>
    </Accordion>
  );
}

export default PeiceMaker;
