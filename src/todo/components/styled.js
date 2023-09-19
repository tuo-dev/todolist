import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 70vw;
  max-width: 980px;
  min-width: 380px;
  height: 90%;
  background: #effbff;
  position: absolute;
  padding: 30px 5vw;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2vw;
  box-shadow: 2px 2px 10px 0 #a2bdc4 inset, -1px -1px 5px 0 #a2bdc4 inset;
`;

export const InputBox = styled.section`
  width: calc(100% - 10vw);
  height: 130px;
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  & h1 {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    font-family: 'UhBeeSe_hyun';
    letter-spacing: 0.8rem;
    color: #079;
    position: relative;
    z-index: -1;
  }
  & strong {
    font-family: 'UhBeeSe_hyun';
    font-size: 1.1rem;
    font-weight: normal;
    color: #079;
    position: absolute;
    right: 50px;
    top: 85px;
    transform: translateY(-50%);
  }
  & .selectBtns {
    height: 55px;
    position: relative;
    & .moveBox {
      width: 100%;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      left: 0;
      top: 0;
      animation: opacityOn 0.4s both;
      padding: 0 3px;
      box-sizing: border-box;
    }
    & .btn {
      width: 5vw;
      min-width: 50px;
      height: 30px;
      letter-spacing: 0.2rem;
      font-family: 'UhBeeSe_hyun';
      color: #079;
      border-radius: 30px;
      box-shadow: 1px 1px 2px 0 #839093, -1px -1px 3px 0 #85969b;
    }
  }
  & .addInputBox {
    display: flex;
    justify-content: space-between;
    height: 45px;
    box-shadow: 1px 1px 3px 0 #7a8689 inset, -1px -1px 2px 0 #9dadb2 inset;
    border-radius: 40px;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 85px;
    transform: translateY(-50%);
    overflow: hidden;
    animation: addInput 0.4s both;
    & input {
      width: 100%;
      padding: 0 50px 0 30px;
      height: 45px;
      outline: none;
      color: #333;
      letter-spacing: 0.2rem;
      font-family: 'UhBeeSe_hyun';
      background: transparent;
    }
    & .addBtn {
      width: 50px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background: transparent;
      font-size: 1.2rem;
      color: #333;
      cursor: pointer;
      display: grid;
      place-content: center;
    }
  }
`;
export const TodoBoardBox = styled.div`
  width: 100%;
  height: calc(100% - 130px);
  margin-top: 130px;
  padding: 30px 1vw;
  box-sizing: border-box;
  border-radius: 40px;
  background: #e8f6f9;
  box-shadow: 1px 1px 3px 0 #7a8689 inset, -1px -1px 2px 0 #9dadb2 inset;
  position: relative;
  z-index: -1;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & select {
    width: 60px;
    height: 25px;
    outline: none;
    color: #394042;
    border-radius: 10px;
    padding-left: 5px;
    margin-left: 10px;
    background: transparent;
    box-shadow: 1px 1px 3px 0 #7a8689, -1px -1px 2px 0 #9dadb2;
    margin-bottom: 10px;
    animation: opacityOn 0.4s both;
  }
  & .nothing {
    font-family: 'UhBeeSe_hyun';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: #98a3a5;
    letter-spacing: 0.2rem;
  }
`;
export const TodoItemBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: 'UhBeeSe_hyun';
  font-size: 0.9rem;
  color: #394042;
  box-shadow: 1px 1px 3px 0 #7a8689, -1px -1px 2px 0 #9dadb2;
  border-radius: 20px;
  height: auto;
  margin: 20px 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  background: #dcf2f7;
  position: relative;
  animation: opacityOn 0.4s both;
  & .tiChk {
    margin-right: 10px;
    width: 1rem;
    height: 1rem;
  }
  & .tiInfo {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding-right: 10px;
    position: relative;
  }
  & .tiCg {
    font-size: 0.9rem;
  }
  & .tiColor {
    width: 20px;
    height: 20px;
    text-align: center;
    position: absolute;
    top: 2px;
    right: 10px;
    font-size: 0.8rem;
  }
  & .tiDate {
    font-size: 0.6rem;
  }
  & .tiEdit {
    flex: 1;
    min-width: 20px;
    padding: 5px 15px;
    margin: 5px 10px 5px 0;
    outline: none;
    font-family: 'UhBeeSe_hyun';
    border-radius: 20px;
    animation: opacityOn 0.4s both;
    /* background: transparent; */
  }
  & .tiTxt {
    display: inline-block;
    flex: 1;
    margin: 0 5px;
    padding: 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .tiBtns {
    display: flex;
    gap: 5px;
    float: right;
  }
  & button {
    width: 30px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: grid;
    place-content: center;
    font-size: 0.9rem;
  }
`;
