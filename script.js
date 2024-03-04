const makeChange = (c) => {
  //SGN your name here
	let ob = { "q": 0, "d": 0, "n": 0, "p": 0 };
	if(c>=25){
		ob.q = Math.floor(c/25);
		c= c%25;
	}else if(c>=10 && c<25){
		ob.d = Math.floor(c/10);
		c= c%10;
	}else if(c>=5 && c<10){
		ob.n = Math.floor(c/5);
		c= c%5;
	}else{
		ob.p = Math.floor(c/1);
		c= c%1;
	}

	return ob;
	
};

// // Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
