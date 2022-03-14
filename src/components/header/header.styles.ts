import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
margin-top: 15px;

@media (min-width: 768px) {
  margin: 40px 0;
  justify-content: space-between;

  > div + div {
    margin: 0 30px;;
  }
} 

@media(min-width: 1024px) {
	justify-content: space-between;
} 

@media (min-width: 1024px) {
  margin: 40px 0;
} 

@media (min-width: 1440px) {
	height: 850px;
	justify-content: space-between;
}

.first-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-top: 5px;
  
  .retangle {
    display: flex;
    width: 80px;
    border-radius: 0 40px 40px 0;
    height: 48px;
    justify-content: end;
    align-items: center;
    margin-top: 15px;
    box-shadow: 0px 32px 59px 0 rgba(0, 0, 0, 0.16);
		
		@media (min-width: 1440px) {
			width: 180px;
			height: 60px;
		}
    
		.eclipse {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      box-shadow: 0px 14px 16px 0 rgb(227 21 62 / 21%);
      background-image: linear-gradient(to top,#e72028,#da3029,#c92251);
      animation: go-back 1s infinite alternate;
      margin-right: 20px;

      @keyframes go-back {
        from {
        transform: translateX(10px);
        }
        to {
        transform: translateX(0);
        }
      }
      
      @media (min-width: 768px) {
        width: 180px;
        height: 180px;
      }

			@media (min-width: 768px) {
				width: 50%;
				height: 84%;
			}

      @media (min-width: 1440px) {
				width: 41px;
		    height: 40px;
        margin-right: 50px;
      }
    }

    img {
      width: 10px;
      height: 10px;
      margin: 0;

			@media (min-width: 768px) {
				width: 14px;
				height: 14px;
			}
    }
  }
  
  img {
    width: 50px;
    height: 50px;
    margin-top: 115px;
    transition: transform 1s;
    transform: translateX(0) scale(1);
    
    :hover,
    :focus {
    transform: translateX(10px) scale(1.2);
    }
    
    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
      margin-top: 110px;
    }

    @media (min-width: 1024px) {
      width: 100px;
      height: 100px;
      margin-top: 230px;
    }
    
    @media (min-width: 1440px) {
      width:163px;
      height: 163px;
      margin-top: 350px;
    }
  }
} 

.second-section {
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (min-width: 1440px) {
    margin-top: 40px;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 768px) {
      margin-left: 50px;
    }

    span {
      color: transparent;
    }

    .boll {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      background-image: linear-gradient(to top,#e72028,#da3029,#c92251);
      border-radius: 50%;
      animation: boucing 1.2s infinite alternate;


      @keyframes boucing {
        0% {
        transform: translateY(0);
        }
        0% {
        transform: translatey(0);
        }
        100% {
        transform: translatey(-10px);
        }
      }

      img {
        width: 14px;
        height: 14px;
      }

      @media (min-width: 768px) {
        width: 25px;
        height: 25px;
      }

      @media (min-width: 1024px) {
        width: 32px;
        height: 32px;
      }

      @media (min-width: 1440px) {
        width: 80px;
        height: 80px;
        margin-bottom: 30px;
      }
    }
  
    p {
      text-align: initial;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: bold;
      width: 190px;
      margin: 0;

      @media (min-width: 768px) {
        width: 310px;
        font-size: 24px;
      }

      @media (min-width: 1024px) {
        width: 464px;
        font-size: 46px;
      }

      @media (min-width: 1440px) {
        font-size: 66px;
        width: 660px;
      }
    }

    .Palavra {
      background-image: linear-gradient(to top, #d85931, #da3029, #c92251), linear-gradient(to bottom, #121b47, #121b47);
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.23;
      letter-spacing: normal;
      text-align: center;
      color: #121b47;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        font-size: 24px;
      }

      @media (min-width: 1024px) {
        font-size: 46px;
      }

      @media (min-width: 1440px) {
        font-size: 66px;
      }
    }    
  }
}

  .subtitle {
    display: flex;
    flex-direction: column;
    align-items: center;

    .first-line {
      display: flex;
      flex-direction: row;
      align-items: baseline;
    }
    
    p {
      color: #4b4545;
      font-family: 'Poppins';
      font-size: 8px;
      width: 199px;
      line-height: 1.65;
      margin: 0;
      text-align: center;
  
      @media (min-width: 768px) {
        width: 350px;
        font-size: 14px;
      }

      @media (min-width: 1024px) {
        width: 388px;
        font-size: 20px;
      }

      @media (min-width: 1440px) {
        width:  723px;
        font-size: 27px;
      }
  
      span {
        color: transparent;

        @media (max-width: 1440px) {
          display: none;
        }
      }
    }

    .boll {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23px;
      height: 23px;
      background-image: linear-gradient(to top,#e72028,#da3029,#c92251);
      border-radius: 50%;
      animation: boucing 1.2s infinite alternate;

      @keyframes boucing {
        0% {
        transform: translateY(0);
        }
        0% {
        transform: translatey(0);
        }
        100% {
        transform: translatey(-10px);
        }
      }

      @media (min-width: 768px) {
        width: 28px;
        height: 28px;
      }

      @media (min-width: 1024px) {
        width: 38px;
        height: 38px;
      }

      @media (min-width: 1440px) {
				width: 94px;
				height: 94px;
      }

      img {
        width: 18px;
        height: 18x;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      max-width: 600px;
      margin-top: 10px;

      .button {
        background-image: linear-gradient(to top,#d85931,#da3029,#c92251);
        color: #fff;
      }

			> button + button {
					margin-left: 20px;
				}

			@media (min-width: 1024px) {
				> button + button {
					margin-left: 86px;
				}
			}

      button {
        font-size: 10px;
        width: 90px;
        height: 30px;
        border-radius: 20px;
        border: 1px solid #da3029;
        background-color: #fff;
        color: #4b4545;
        margin-top: 9px;
				cursor: pointer;

        > button + button {
          margin: 0 20px;
        }

        @media (min-width: 768px) {
          width: 120px;
          height: 35px;
          font-size: 14px;
        }

        @media (min-width: 1024px) {
          border: 3px solid #da3029;
          width: 140px;
          height: 45px;
          font-size: 14px;
          margin-top: 20px;
        }

        @media (min-width: 1440px) {
          width: 280px;
          height: 68px;
          font-size: 24px;
          border-radius: 50px;
          margin-top: 35px;
        }

        :hover {
          background-image: linear-gradient(to top,#d85931,#da3029,#c92251);
          color: #fff;
        }
      }
    }
  }
}

.third-section {
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    margin: 50px 0 0 10px;
    padding: 0 12px;
    box-shadow: 0px 8px 21px 0 rgb(0 0 0 / 16%);

    img {
      width: 20px;
      height: 30px;

      @media (min-width: 768px) {
        width: 65px;
        height: 65px;
      }
    }
  }

  img {
    width: 50px;
    height: 50px;
    transition: transform 1s;
    transform: translateX(0) scale(1);
    /* margin-bottom: 175px; */

    /* :hover,
    :focus {
    transform: translateX(10px) scale(1.2);
    } */
    
    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }

    @media (min-width: 1024px) {
      width: 100px;
      height: 100px;
    }
    
    @media (min-width: 1440px) {
      width:163px;
      height: 163px;
    }
  }
`;
