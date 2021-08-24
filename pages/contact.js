// ran npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// 
import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import Layout from '../components/Layout';
import formStyles from'../styles/form.module.css';
import Image from 'next/image';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzbykqgw");

  if (state.succeeded) {

    return (
    <Layout>
    <p className={formStyles.thanks}>
      <Image
          src="/images/thankyou.jpg"
          alt="thank you"
          width={800}
          height={500}
        />
      </p>;
    </Layout>
    )
  }

  return (
<Layout>

      <form onSubmit={handleSubmit} className={formStyles.container}>
        <div className={formStyles.main2}>
          <label htmlFor="email" className={formStyles.labels}>
          </label>
          <br />
            <input 
            id="email" 
            type="email" 
            name="email"
            placeholder="your email"
            className={formStyles.inputs}
            />
            <ValidationError 
            prefix="Email" 
            field="email" 
            errors={state.errors} 
            className={formStyles.fieldErrors}
            />
        </div>

      <div className={formStyles.main2}>  
          <label htmlFor="message" className={formStyles.labels}>
          </label>
          <br />
            <textarea 
            id="message" 
            name="message"
            placeholder="your message"
            className={`${formStyles.inputs} ${formStyles.textarea}`}
            />
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className={formStyles.fieldErrors}
            />
      </div>
      <div className={formStyles.main2}>
        <button 
          type="submit" 
          disabled={state.submitting}
          className={`${formStyles.inputs} ${formStyles.button}`}
        >
        Submit
        </button>
      <ValidationError 
        errors={state.errors}
        className={formStyles.formErrors}
      />
      </div>
    </form>
</Layout>
  );
}