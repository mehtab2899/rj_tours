import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/5.jpg"
import { Button } from "./Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>start booking now</h1>
        <form action="#">
          <FormWrap>
            <div className="form_group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Full name"
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
              />
            </div>
            <Button type="submit" primary="true" round="true">
              Submit
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 50%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
`
const EmailContent = styled.div`
  width: 50%;
  padding: 2.5rem;

  h1 {
    font-size: clamp(1rem, 5vw, 3rem);
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`

const FormWrap = styled.div`
  label {
    padding: 1rem;
  }

  input {
    display: block;
    padding: 1rem 1.5rem;
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin: 1rem 0 2rem;

    :focus {
      outline: none;
      /* box-shadow: 0 1rem 2rem rgba(#000, 0.1); */
      border-bottom: 2px solid #f26a2e;
    }

    :focus:invalid {
      border-bottom: 2px solid red;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
