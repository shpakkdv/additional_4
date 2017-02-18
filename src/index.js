module.exports = function multiply(first, second) {
	var string = '', buf = 0, stringPrev, bufStr = 0, stringSum = '';

	for (let i = second.length - 1; i >= 0; i--) {

		for (let j = first.length - 1; j >= 0; j--) {
			
			var temp = first[j]*second[i];
			if (temp + buf > 9) {
				string = (temp + buf) % 10 + string;
				buf = Math.floor((temp + buf) / 10);
			} else {
				string = temp + buf + string;
				buf = 0;
			}

		}

		if (buf !== 0) {
			string = buf + string;
			buf = 0;
		}


		if (i !== second.length - 1) {
			string = string + new Array(second.length - i).join('0')

			var l = stringPrev.length - 1;
			for (let k = string.length - 1; k >= 0; k--) {
				if (l < 0 ) {
					l = 0;
					stringPrev = '0';
				}

				var tempStr = (+string[k])+(+stringPrev[l])+bufStr;
				if (tempStr > 9) {
					stringSum = tempStr % 10 + stringSum;
					bufStr = Math.floor(tempStr / 10);
				} else {
					stringSum = tempStr + stringSum;
					bufStr = 0;
				}
				l--;
			}


			if (bufStr !== 0) {
				stringSum = bufStr + stringSum;
				bufStr = 0;
			}


			stringPrev = stringSum;
			stringSum = '';
			string = '';
			////////////////////// on 5
			console.log(stringPrev);

		} else {
			stringPrev = string;
			string = '';
		}
	}

	return stringPrev;
}