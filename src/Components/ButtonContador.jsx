import React from 'react'
import { useState } from 'react';
import { Button, Span } from '../styles/ButtonContador.styled';

function ButtonContador() {

	const [count, setCount] = useState(0);

	function increment() {
		//setCount(prevCount => prevCount+=1);
		setCount(function (prevCount) {
		  return (prevCount += 1);
		});
	  }
	
	  function decrement() {
		setCount(function (prevCount) {
		  if (prevCount > 0) {
			return (prevCount -= 1); 
		  } else {
			return (prevCount = 0);
		  }
		});
	  }
  
	return (
	  <div>
		<Button onClick={decrement}> - </Button>
		<Span>{count}</Span>
		<Button onClick={increment}>  + </Button>
	  </div>
	);
  };

export default ButtonContador