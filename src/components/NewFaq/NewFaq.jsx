import * as React from 'react';
import {Typography,Container,Box,Stack,Pagination} from "@mui/material";
import {styled }from "@mui/material/styles";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./index.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FaqQA= [{
    id: "",
    question : "",
    answer : "",
}
]

const NewFaq = ()=>{
    return (<>
    <Box>jhj</Box>
    <Stack>jkhjg</Stack>
    <section className="faq" sx={{background : "#f0f3f7"}}>
        <Box  sx={{p: 5}} >
        <Typography variant="h5" sx={{fontFamily:"Montserrat, sans-serif;", fontSize: "25px",fontWeight:"500"}}>FAQs</Typography>
        <Typography variant="p">Can't find the answer to your question?<Typography variant="span" sx={{color:"#007bff",display:"flex",alignItems:"center"}}>Talk to us <ArrowRightAltIcon /></Typography></Typography>
        </Box>
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What Is a Headless Website Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The front end (what the user sees and interacts with) and the back-end (the content management system or database) are decoupled in a headless website development. This empowers developers from the constraints of a traditional CMS, allowing them to create unique user experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why Choose A Headless Website Build?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There are significant benefits to using a headless website, such as increased flexibility, faster page loading, more straightforward content authoring, enhanced security, and better integration with other technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is A Headless Website Suitable For My Company?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It depends on your organisation's needs and objectives. A headless website is an excellent option for businesses that have desire greater control over their design and user experience, as well as the ability to scale and adapt to changing circumstances. However, they may not be the ideal option for businesses that lack the resources or expertise to independently manage the front-end and back-end
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is A Headless Website Suitable For My Company?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It depends on your organisation's needs and objectives. A headless website is an excellent option for businesses that have desire greater control over their design and user experience, as well as the ability to scale and adapt to changing circumstances. However, they may not be the ideal option for businesses that lack the resources or expertise to independently manage the front-end and back-end
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <Pagination  sx={{float:'right'}}/>
    </section>
    </>)
};
export default NewFaq;