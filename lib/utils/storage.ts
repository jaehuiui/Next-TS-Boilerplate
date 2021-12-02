/**
 * Save Value with Key in localStorage
 * !Cannot Access LocalStorage in Server-Side
 * *In case of SSR, Using Broswer Cookie is recommended
 * @params key, value
 * @return void
 */

function setItem(key: string, value: any): void {
	localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Get Value with Key in localStorage
 * !Cannot Access LocalStorage in Server-Side
 * *In case of SSR, Using Broswer Cookie is recommended
 * @params key
 * @return value | undefined
 */

function getItem(key: string): any {
	if (localStorage.getItem(key)) {
		return JSON.parse(localStorage.getItem(key));
	}
	return undefined;
}

/**
 * Remove Value with Key in localStorage
 * !Cannot Access LocalStorage in Server-Side
 * *In case of SSR, Using Broswer Cookie is recommended
 * @params key
 * @return void
 */

function removeItem(key: string): void {
	if (localStorage.getItem(key)) {
		localStorage.removeItem(key);
	}
}

export { setItem, getItem, removeItem };
