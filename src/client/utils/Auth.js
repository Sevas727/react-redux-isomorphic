import cookie from 'react-cookie'

const tokenName = 'token'

export const Auth = {
    setToken(token){
        cookie.save(tokenName, token)
    },
    getToken(){
        return cookie.load(tokenName)
    },
    isAuthenticated(){
        return this.getToken() ? true: false
    },
    logout(){
        cookie.remove(tokenName)
    }
}