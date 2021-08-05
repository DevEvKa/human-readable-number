module.exports = function toReadable (number) {
if(typeof(number) != "number") return 'Enter a number from 0 to 999';
	let arr=number.toString().split('');
	let res=[];
	let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let tenPlusUnit = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
	if (arr.length === 3) {
		for (let i in arr) {
if (i == 0) {
		res.push(hundreds[arr[i]])
} else if (i == 1) {
		if (arr[1] == '0') {
		 		continue
		 	} else if (arr[1] == '1') {
				 if (arr[2] == '1') {
						 res.push(tenPlusUnit[arr[1]])
						 break
				 } else if (arr[2] == '2') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 } else if (arr[2] == '3') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 } else if (arr[2] == '4') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 } else if (arr[2] == '5') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 } else if (arr[2] == '6') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 } else if (arr[2] == '7') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 } else if (arr[2] == '8') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 } else if (arr[2] == '9') {
						 res.push(tenPlusUnit[arr[2]])
						 break
				 }
		 }
		res.push(tens[arr[i]])
} else if (i == 2) {
	if (arr[2] == '0') {
		 		break
		 	} else {
		 		res.push(units[arr[i]])
		 	}	
}
}
}
 else if (arr.length === 2) {
		for (let i in arr) {
			if (i==0) {
		 if (arr[0] == '1') {
		 	if (arr[1] == '0') {
		 		res.push(tens[arr[i]])
		 		continue
		 	} else if (arr[1] == '1') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '2') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '3') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '4') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '5') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '6') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '7') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '8') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else if (arr[1] == '9') {
		 		res.push(tenPlusUnit[arr[1]])
		 		break
		 	} else {res.push(tens[arr[i]])}
		 }
		res.push(tens[arr[i]])
	} else if (i == 1) {
		if (arr[i] == 0) {
			continue
		} else {
		res.push(units[arr[i]])
}
}
}
} else if (arr.length === 1) {
		for (let i in arr) {
			if (i == 0) { 
				res.push(units[arr[i]])
		  }
		}
	}
		

return res.join(' ')
}
