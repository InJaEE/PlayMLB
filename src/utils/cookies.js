function saveAuthToCookie(value) {
	document.cookie = `playMLB_auth=${value}`;
}

function saveIdToCookie(value) {
	document.cookie = `playMLB_id=${value}`;
}

function saveUserToCookie(value) {
	document.cookie = `playMLB_user=${value}`;
}

function getAuthFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)playMLB_auth\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}
function getIdFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)playMLB_id\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function getUserFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)playMLB_user\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function deleteCookie(value) {
	document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
	saveAuthToCookie,
	saveIdToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getIdFromCookie,
	getUserFromCookie,
	deleteCookie,
};
