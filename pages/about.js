import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { Grid, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import useStyles from '../utils/styles';

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Layout>
      <Carousel className={classes.mt1} animation="slide" duration="10">
        <Image
          src="/images/1.jpg"
          alt="Picture of the author"
          width={1500}
          height={400}
        />
        <Image
          src="/images/2.jpg"
          alt="Picture of the author"
          width={1500}
          height={400}
        />
        <Image
          src="/images/3.jpg"
          alt="Picture of the author"
          width={1500}
          height={400}
        />
      </Carousel>
      <Typography variant="h1">Meet the artist</Typography>
      <Grid container>
        <Grid item xs={1} />
        <br />
        <div>
          {' '}
          My name is Tim Furlow. I&apos;m an artist with a few other skills such
          as photography, sculpture and videography, but I specialize in Pop Art
          Pointilism with acrylic on canvas. Art is everywhere you look. For me,
          it&apos;s every waking moment, and a constant search. My approach to
          painting is the creation of a blend of pop art, overshadowing
          brilliantly colored abstract art. Each piece is completed 1 dot at a
          time using a size 0 brush. No stencils are used in any piece.
          <br />
          Commissioned work and live events are available for event scheduling,
          please feel free to contact me.
          I&apos;ve started a kickstarter to crowdfund my very first true crime
          documentary. My goal is to show the world what they&apos;ve forgotten.
          I love recreating the past in a modern way. Please join me on this
          wild ride in the life of an artist!
        </div>
        <br />
        <div className="container">
          <Image
            className={classes.sig}
            src="/images/tim_sig.png"
            alt="sig of the author"
            width={150}
            height={50}
          />
          <style jsx>
            {`
              .container {
                margin-top: 10px;
                margin-left: 10px;
                margin-bottom: 10px;
                margin-right: 50%;
              }
            `}
          </style>
        </div>
      </Grid>
    </Layout>
  );
}
