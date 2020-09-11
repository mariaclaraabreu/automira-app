import styled from 'styled-components'

export const OffersStyles = styled.div`
  color: #854632 !important;
  background: #ffffff;
  padding: 30px;

  h1 {
  }

  .col {
    margin: 10px;
  }

  .card {
    transition: transform 0.2s;
  }

  .card:hover {
    -webkit-box-shadow: 1px 7px 8px -2px rgba(192, 192, 192, 1);
    -moz-box-shadow: 1px 7px 8px -2px rgba(192, 192, 192, 1);
    box-shadow: 1px 7px 8px -2px rgba(192, 192, 192, 1);
    transform: translateY(7px);
  }
`

export const InfosOffers = styled.div`
  /* display: flex;
  flex-direction: row; */

  span {
    margin-right: 10px;
  }
  strong {
    margin-right: 3px;
  }
  p {
    margin-bottom: 0px;
  }

  .views {
    margin: 7px -25px -25px -25px;
    /* margin-top:5px;
    margin-bottom: -25px;
    margin-left: -25px;
    margin-right: -25px; */
    padding: 10px;
    background: #198c4d;
    color: #ffffff;
    text-align: center;

    font-size: 15px;
    cursor: default;
  }
`
