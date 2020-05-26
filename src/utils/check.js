function isEmpty(value) {
	if (
		value == '' ||
		value == null ||
		value == undefined ||
		(value != null && typeof value == 'object' && !Object.keys(value).length)
	) {
		return true;
	} else {
		return false;
	}
}

const isChrome =
	/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

export { isEmpty, isChrome };
