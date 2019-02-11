import styled from 'styled-components';

const CreateNewStyles = styled.div`
  h4 {
    color: ${props => props.theme.red};
    margin-bottom: 1rem;
  }

  .new-wholesale-item-form {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;

    h6 {
      font-size: 1.6rem;
      margin-left: 0.25rem;
    }

    .DayPickerInput {
      margin-right: 10px;
    }

    .form-footer {
      width: 100%;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: -25px;

      #submit-new-batch-container {
        margin: 0 20px 0 0;
        p {
          border-radius: 300px;
          font-size: 0.9rem;
          padding: 6px 12px;
          height: 35px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${props => props.theme.white};
          background: ${props => props.theme.red};
        }

        a {
          color: ${props => props.theme.green};
          font-weight: 600;
          font-size: 0.85em;
        }
      }

      #new-batch-count {
        margin-left: 5px;
      }
    }

    .form-btns {
      display: flex;
      align-items: flex-start;

      & > *:not(:last-child) {
        margin-right: 1rem;
      }
    }

    .whs-image {
      width: 150px !important;
      margin: 0;
      padding: 0;
      background: #fff !important;
    }

    #new-whs-img-btn {
      width: 40px;
      cursor: pointer;
      margin-right: 25px;
    }

    #new-whs-img {
      display: none;
    }

    .camera-icon {
      height: 45px;
    }

    .image-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0;
      margin: 0;

      img {
        height: 75px;
        margin: 0 25px 0 0;
        cursor: pointer;
      }
    }
  }
`;

export default CreateNewStyles;
