import React from 'react';
import { TermsESP } from './Terms/TermsESP';
import { TermsENG } from './Terms/TermsENG';

export const Terms = () => {
  return (
    <>
      <TermsENG />
      <hr />
      <TermsESP/>
    </>
  )
}
