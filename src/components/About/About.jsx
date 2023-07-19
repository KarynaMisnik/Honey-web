import React from 'react';
import aboutData from './aboutData.json';
import Grid from '@mui/material/Grid';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  ...theme.typography.body2,
  margin:'20px', 
  fontFamily:'var(--main-font)', 
  fontSize:'24px', 
  fontWeight:'900', 
  letterSpacing:'2px',

     '@media (max-width: 900px)': {
    fontSize: '16px',
  },
}));

const ParagraphOnRight = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  ...theme.typography.body2,
  lineHeight:'30px', 
  fontFamily:'var(--main-font)', 
  fontSize:'20px', 
  width:'100%',
  padding: '5px 20px 10px 10px',


     '@media (max-width: 900px)': {
    fontSize: '14px',
    lineHeight:'20px',
  },
}));

const ParagraphOnLeft = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  ...theme.typography.body2,
  lineHeight:'30px', 
  fontFamily:'var(--main-font)', 
  fontSize:'20px', 
  width:'100%',
  padding: '10px 20px 10px 30px',


     '@media (max-width: 900px)': {
    fontSize: '14px',
    lineHeight:'20px',
  },
}));


const CenteredParagraph = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  ...theme.typography.body2,
  lineHeight:'30px', 
  fontFamily:'var(--main-font)', 
  fontSize:'20px', 
  width:'100%',
  padding: '20px 40px',


     '@media (max-width: 900px)': {
    fontSize: '14px',
    lineHeight:'20px',
  },
}));


 function About(){

    return(
        <>
        <Title >Welcome to the enchanting world of the Doe family beekeepers!</Title>

         <Grid container spacing={2} sx={{background:'red' ,direction:'row', '@media (max-width: 600px)': {
        '& > *': {
          direction: 'column', 
        },
      },}}>

 <Grid item xs={12} md={6}>
          <img src={aboutData[0].src} alt={aboutData[0].alt} style={{
            width: '100%',
            borderRadius: '15px',
            padding: '5px 20px 10px 10px',
    
          }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ParagraphOnRight>{aboutData[0].text}</ParagraphOnRight>
        </Grid>

        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <ParagraphOnLeft>{aboutData[1].text}</ParagraphOnLeft>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={aboutData[1].src} alt={aboutData[1].alt} style={{
           width: '100%',
            borderRadius: '15px',
            padding: '5px 20px 10px 10px',
          }} />
        </Grid>
      </Grid>

<Grid item xs={12} md={6}>
          <img src={aboutData[2].src} alt={aboutData[2].alt} style={{
            width: '100%',
            borderRadius: '15px',
            padding: '5px 20px 10px 10px',
    
          }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ParagraphOnRight>{aboutData[2].text}</ParagraphOnRight>
        </Grid>

    <Grid container spacing={2}>
            <CenteredParagraph>{aboutData[3].text}</CenteredParagraph>

        </Grid>

   <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <ParagraphOnLeft>{aboutData[4].text}</ParagraphOnLeft>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={aboutData[4].src} alt={aboutData[4].alt} style={{
           width: '100%',
            borderRadius: '15px',
            padding: '5px 20px 10px 10px',
          }} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
            <CenteredParagraph>{aboutData[5].text}</CenteredParagraph>

        </Grid>

        <Grid container spacing={2}>
            <CenteredParagraph>{aboutData[6].text}</CenteredParagraph>

        </Grid>

      </Grid>

 
    </>
    )
}

export default About;