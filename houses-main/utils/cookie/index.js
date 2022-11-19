export const getCookie = (cname) => {
    let name = cname + "="
    let ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

export const setCookie = (
    cname,
    cvalue,
    second = 3600,
    domain = "path=/;"
) => {
    let d = new Date()
    d.setTime(d.getTime() + second * 1000)
    let expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + "; " + expires + "; " + domain
}

export const removeCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}
