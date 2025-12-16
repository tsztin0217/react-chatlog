const ColorChoice = (props) => {
  return (
    <>
      <button className='red' onClick={() => props.onClickColor('red')}>🔴</button>
      <button className='orange' onClick={() => props.onClickColor('orange')}>🟠</button>
      <button className='yellow' onClick={() => props.onClickColor('yellow')}>🟡</button>
      <button className='green' onClick={() => props.onClickColor('green')}>🟢</button>
      <button className='blue' onClick={() => props.onClickColor('blue')}>🔵</button>
      <button className='purple' onClick={() => props.onClickColor('purple')}>🟣</button>
    </>
  );
};

export default ColorChoice;