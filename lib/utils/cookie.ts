import cookie from "react-cookies";

/**
 * Save Value with Key in cookie
 * *Recommendation : Use Cookie with SSR, ex) accessToken
 * @params key, value, expireHours
 * @return void
 */

function setCookie(key: string, value: string, expireHours: number): void {
	let expires = new Date();
	expires.setHours(expires.getHours() + expireHours);
	// expires type must be Date

	cookie.save(key, value, {
		path: "/",
		expires,
	});
}

/**
 * Get cookie
 * *Recommendation : Use Cookie with SSR, ex) accessToken
 * @params key
 * @return string | undefined(if not exist)
 */

function getCookie(key: string): string | undefined {
	return cookie.load(key);
}

/**
 * Get all available cookies
 * *Recommendation : Use Cookie with SSR, ex) accessToken
 * @params void
 * @return object { cookies : { _token : 0987654321 } }
 */

function getAllCookies(): object {
	const cookies = { cookies: cookie.loadAll() };

	return cookies;
}

/**
 * Remove Cookie Value with Key
 * *Recommendation : Use Cookie with SSR, ex) accessToken
 * @params key
 * @return void
 */

function removeCookie(key: string): void {
	return cookie.remove(key, { path: "/" });
}

export { setCookie, getCookie, getAllCookies, removeCookie };
