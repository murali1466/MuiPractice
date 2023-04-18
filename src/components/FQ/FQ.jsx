import {
    Box,
    Grid,
    Card,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TablePagination,
    Pagination,
    Stack,
    List,
    ListItem
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import { useState } from 'react';
  import { styled } from '@mui/material/styles';
  
  const QA = [
    {
      id: 1,
      Question: '1. How to create a workspace in Breeze?',
      Answers:(
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
    After logging in, you will see a green button to add a workspace at the upper right corner of your screen. You can click on it and create a workspace.
        </Typography>
      )
      
    },
    {
      id: 2,
      Question: '2. How to add a website to your Breeze workspace?',
      Answers: (
        <Typography
        fontFamily="Roboto"
                              fontSize="15px"
                              color="#03224F"
                              fontWeight="400"
                              lineHeight="18px"
                              sx={{
                                opacity: '0.8'
                              }}>
          "After creating a workspace, there is an option on the main menu to add
          a new website"
          <br />
          <br />
          Click on ‘Website’  Add necessary details  Create a website
        </Typography>
      )
    },
    {
      id: 3,
      Question: '3. How to add a team to your website management system?',
      Answers: (
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
          To add a team to your website, you first need to create a company and
          company members.
          <br />
          <br />
          Once you have the company and members ready, you can simply click on the
          “Team” button and fill in the details like Team Name and Team Member to
          create a team.
        </Typography>
      )
    },
    {
      id: 4,
      Question: '4. How to add a company to your Breeze workspace?',
      Answers: (
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
          Go to the <b>"Company’</b> Tab on the main menu.
          <br />
          Click on the Add button.
          <br /> Choose a company logo to upload (optional)
          <br /> Enter company name
          <br />
          That’s how you create a company on the Breeze App.
        </Typography>
      )
    },
    {
      id: 5,
      Question: '5. How does Domain Management work?',
      Answers: (
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
          Domain Management is designed to keep your domain information at one
          place.
          <br />
          <br />
          After you log into the Breeze Web App -
          <br /> <br />
          1.Click on the ‘Domain Management’ tab
          <br /> 2.Click on the Green Button with the plus sign in the upper
          right-hand corner.
          <br /> 3.Add your domain information like domain name, TLD, purchase
          rate, renewal price, renewal date, etc.
          <br /> 4.Save this information and never lose on any of your important
          dates and links ever! That’s how you create a company on the Breeze App.
        </Typography>
      )
    },
    {
      id: 6,
      Question: '6. What is Take Screenshot?',
      Answers:(
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
         ‘Take screenshot’ is a tool designed to help you take screenshots of any URL on the internet.
        </Typography>
      )
        
    },
    {
      id: 7,
      Question: '7. How does Take Screenshot work?',
      Answers: (
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
          You can add any URL you want to take a screenshot of in the URL tab. .
          After submitting the URL, it takes a few seconds to load a screenshot of
          that particular URL. You can download the screenshot if you wish.
        </Typography>
      )
    },
    {
      id: 8,
      Question: '8. Can you create more than one workspace in the Breeze Web Application?',
      Answers:(
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
      Yes, you can create more than one workspace in Breeze. You will need to upgrade your plan to avail of that feature
      </Typography>
      )
        
    },
    // {
    //   id: 9,
    //   Question: '9.How To remove Website ?',
    //   Answers:
    //     'Then an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.'
    // },
    {
      id: 9,
      Question: '9. How to get a token to access the chrome extension?',
      Answers: (
        <List sx={{ listStyle: 'square', listStylePosition: 'inside' }}>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            {' '}
            Go to Account Page
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            You can see your chrome extension token in the Details tab
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            We provide a copy option so you can easily copy and paste it in the
            chrome extension.
          </ListItem>
        </List>
      )
    },
    {
      id: 10,
      Question: '10. How to regenerate a new API token?',
      Answers: (
        <List
          sx={{
            listStyle: 'circle',
            listStylePosition: 'inside'
          }}
        >
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            {' '}
            Go to Account Page
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            You can see your chrome extension token in the Details tab
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Click on the refresh token option behind the token
          </ListItem>
        </List>
      )
    },
    {
      id: 11,
      Question: '11. How to invite someone to your workspace?',
      Answers: (
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
          You can invite a team or a team member to your workspace.
          <br />
          <br />
      <Box marginLeft={3}>
          1. You will find a button “Add Team Member” at the bottom of your
          workspace with a plus sign. Click on it.
          <br /> 2. Choose whether you want to invite a new team member or a team to
          your workspace.
          <br /> 3. Mention the role, and choose a team.
          <br /> 4. Click on the ‘Send Invite’
          <br />
          <br />
          </Box>
          <b>
            <i>
              {' '}
              Note: You can only add team members from the existing database. If
              you want to invite a new team member, you’ll have to add their
              record in the ‘Member’ tab.
            </i>
          </b>
        </Typography>
      )
    },
    {
      id: 12,
      Question: '12. How to remove users from a specific workspace ?',
      Answers: (
        <>
          <img src="/assets/images/avatars/faq.png" />
          <br />
          <Typography fontFamily="Roboto"
                              fontSize="15px"
                              color="#03224F"
                              fontWeight="400"
                              lineHeight="18px"
                              sx={{
                                opacity: '0.8'
                              }}>
            <br /> <br />
            1. You will find a delete button after clicking on the members icon at the bottom of your workspace.
  
          </Typography>
        </>
      )
    },
    {
      id: 13,
      Question: '13. What is GA View ID ?',
      Answers: (
        <Typography fontFamily="Roboto"
        fontSize="15px"
        color="#03224F"
        fontWeight="400"
        lineHeight="18px"
        sx={{
          opacity: '0.8'
        }}>
          GA View ID is the unique Id for retrieving Google Analytics data.
          <br />
          <br />
          You can find your GA View ID in Google Analytics  Admin  View Settings.
          <br /> <br />
        </Typography>
      )
    }
  ];
  
  const TablePaginationWrapper = styled(TablePagination)(
    ({ theme }) => `
     .MuiTablePagination-displayedRows, .MuiTablePagination-spacer {
       display:none;
     }
     .MuiToolbar-root {
      justify-content: center;
     }
     .MuiButtonBase-root{
       width:40px;
       height:40px;
     border-radius: 100px;
     }
     .MuiButtonBase-root .MuiSvgIcon-root{
      color: #00B45A;
     }
     .MuiButtonBase-root .Mui-disabled {
       background:rgba(34, 51, 84, 0.2);
       opacity:0.5
     }
  
     .Mui-disabled > .MuiSvgIcon-root{
      opacity:0.3
     }
     
  `
  );
 function FQ() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(event.target.value, 1);
      setPage(0);
    };
  
    return (
      <>
        <Grid container sx={{ px: { xs: 1, md: 15 } }}>
          <Grid item xs={12} sm={10}>
            <Box sx={{ pb: 2 }}>
              <Box
                sx={{
                  py: { xs: 3, md: 3 },
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '37px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '700',
                    color: '#03224F',
                    lineHeight: '39px'
                  }}
                >
                  FAQ
                </Typography>
                <Typography
                  sx={{
                    fontSize: '17px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '400',
                    color: '#03224F',
                    opacity: '0.6',
                    lineHeight: '22px'
                  }}
                >
                  Last Revised: April 15, 2021
                </Typography>
              </Box>
              <Card sx={{ width: 'auto', height: 'auto' }}>
                <Box sx={{ p: { xs: 3, md: 3 } }}>
                  {QA.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  ).map((values) => {
                    return (
                      <>
                        <Accordion key={values.id}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={values.id}
                            key={values.id}
                          >
                            <Typography
                              sx={{
                                fontSize: '17px',
                                lineHeight: '22px',
                                fontFamily: 'Chakra Petch',
                                fontWeight: '700',
                                color: '#03224F'
                              }}
                            >
                              {' '}
                              {values.Question}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{ pl: { xs: 3, md: 3.5 } }}>
                            <Typography
                              fontFamily="Roboto"
                              fontSize="15px"
                              color="#03224F"
                              fontWeight="400"
                              lineHeight="18px"
                              sx={{
                                opacity: '0.8'
                              }}
                            >
                              {values.Answers}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </>
                    );
                  })}
  
                  <TablePaginationWrapper
                    sx={{ float: 'right',my:2 }}
                    component="div"
                    count={QA.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[]}
                    labelRowsPerPage=""
                  />
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
 export default FQ;