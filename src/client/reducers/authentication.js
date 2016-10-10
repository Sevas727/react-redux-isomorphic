import {Auth} from '../utils/Auth'

export default function () {
    return {
        token: Auth.isAuthenticated() ? Auth.getToken(): null
    }
}