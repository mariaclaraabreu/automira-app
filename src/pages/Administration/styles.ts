import styled from 'styled-components'

export const AdministrationStyles = styled.div`
  .listOffers {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .listOffersItem {
    border-bottom: 1px solid #eaeaea;
  }

  .listOffersItem:hover {
    background: #ffffff;
  }

  .link {
    color: #242425;
  }
  a {
    font-size: 20px;
  }
  a:hover {
    color: #198c4d;
  }

  strong {
    margin-right: 5px;
  }

  .buttonEdit {
    background-color: #198c4d;
    color: #ffffff;
    border-radius: 3px;
    padding: 23px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttonEdit:hover {
    border: 0;
    opacity: 0.8;
    background-color: #198c4d;
    color: #ffffff;
  }

  .search {
    padding: 10px;
    border: 0;
    border-radius: 3px;
    width: 70% !important;
  }
`
