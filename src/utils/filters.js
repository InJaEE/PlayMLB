function formatFeetInches(feet, inches) {
	const height = Math.floor(feet * 30.38 + inches * 2.54) + 'cm';
	return height;
}

function formatLb(lb) {
	const weight = Math.floor(lb * 0.45) + 'kg';
	return weight;
}

function formatDate(value) {
	if (value === '') {
		return '-';
	}
	const date = new Date(value);
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	month = month > 9 ? month : `0${month}`;
	let day = date.getDate();
	day = day > 9 ? day : `0${day}`;
	return `${year}.${month}.${day}`;
}

function formatFullDate(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let createDate = `${year}.${month}.${day}`;

	let now = new Date();
	now = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

	if (createDate !== now) {
		month = month > 9 ? month : `0${month}`;
		day = day > 9 ? day : `0${day}`;
		createDate = `${year}.${month}.${day}`;
		return createDate;
	}

	let hours = date.getHours();
	hours = hours > 9 ? hours : `0${hours}`;
	let minutes = date.getMinutes();
	minutes = minutes > 9 ? minutes : `0${minutes}`;

	return `${hours}:${minutes}`;
}

function formatPosition(value) {
	let position = '';
	switch (value.toUpperCase()) {
		case 'P':
			position = '투수';
			break;
		case '1B':
			position = '1루수';
			break;
		case '2B':
			position = '2루수';
			break;
		case '3B':
			position = '3루수';
			break;
		case 'SS':
			position = '유격수';
			break;
		case 'LF':
			position = '좌익수';
			break;
		case 'CF':
			position = '중견수';
			break;
		case 'RF':
			position = '우익수';
			break;
		case 'DH':
			position = '지명타자';
			break;
		case 'C':
			position = '포수';
			break;
		default:
			position = '/';
			break;
	}
	return position;
}

export {
	formatFeetInches,
	formatLb,
	formatDate,
	formatFullDate,
	formatPosition,
};
