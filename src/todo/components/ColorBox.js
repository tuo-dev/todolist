import { styled } from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ColorWrapper = styled.div`
  width: auto;
  height: 20px;
  padding: 10px;
  position: absolute;
  left: 40px;
  top: 0;
  background: #e5f9ff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 80px;
  display: flex;
  justify-content: space-around;
  gap: 13px;
`;
const ColorRadioBox = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  & input[type='radio'] {
    appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ color }) => color};
  }
  & input[type='radio']:checked {
    border: 3px solid #ededed;
  }
`;

function ColorBox({ colorChange, onColorChange }) {
  const labels = [
    { id: 0, value: '#ccc' },
    { id: 1, value: '#dc143c' },
    { id: 2, value: '#f7e600' },
    { id: 3, value: '#8f784b' },
    { id: 4, value: '#0067a3' },
  ];

  return (
    <>
      <ColorWrapper>
        {labels.map((item) => (
          <ColorRadioBox key={item.id} color={item.value}>
            <input
              type="radio"
              name="colorOption"
              key={item.id}
              value={item.value}
              onChange={colorChange}
            />
          </ColorRadioBox>
        ))}
        <button
          type="button"
          onClick={onColorChange}
          style={{
            width: 'auto',
            height: 'auto',
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </ColorWrapper>
    </>
  );
}

export default ColorBox;
