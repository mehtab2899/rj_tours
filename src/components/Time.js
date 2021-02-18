import React from "react"
import styled from "styled-components"
import Moment from "react-moment"

const Time = () => {
  let dateToFormat
  setInterval(() => {
    dateToFormat = new Date()
  }, 1000)
  return (
    <TimeContainer>
      <Moment format="MMMM Do YYYY, hh:mm:ss A" interval={1000}>
        {dateToFormat}
      </Moment>
    </TimeContainer>
  )
}

export default Time

const TimeContainer = styled.div`
  /* background-color: red; */
`
