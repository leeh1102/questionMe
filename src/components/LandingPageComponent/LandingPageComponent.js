import * as React from 'react';
import PropTypes from 'prop-types';
import Styles from './LandingPageStyle.js';
import '@fontsource/public-sans';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import { fontSize } from '@mui/system';

export default function LandingPageComponent() {

  return (
    <div style={Styles.generalStyle}>
      <div style={Styles.introSytle}>
        <h1> Predict Interview Questions </h1>
        <p> This is a web application predicts interview questions based on your resume </p>
      </div>
      <div>
        <form >
          <FormLabel><b>Occupation</b></FormLabel>
          <Input placeholder="Please enter your intended occupation" required sx={Styles.inputSytle} />

          <FormLabel><b>Summary of yourself</b></FormLabel>
          <Textarea placeholder="Add a summary of your professional experience and information about yourself" sx={Styles.inputSytle} />
          <FormLabel><b>Skill set</b></FormLabel>
          <Textarea placeholder="Add your skill set" sx={Styles.inputSytle} />

          <FormLabel><b>Professional experience</b></FormLabel>
          <Textarea placeholder="Add your professional experience" sx={Styles.inputSytle} />

          <FormLabel><b>Projects / Portfolio</b></FormLabel>
          <Textarea placeholder="Add your projects or portfolio" sx={Styles.inputSytle} />

          <Button type="submit" sx={Styles.buttonStyle}>GENERATE QUESTIONS</Button>
        </form>
        <div >
          <FormLabel sx={Styles.otherSytle}><b>Time to practice!</b></FormLabel>
          <Textarea placeholder="Questions will appear here" sx={Styles.outputSytle} />

        </div>
      </div>
    </div>



  );


  return (
    <div>
      LandingPageComponent Component
    </div>
  )
};

LandingPageComponent.propTypes = {};

LandingPageComponent.defaultProps = {};

