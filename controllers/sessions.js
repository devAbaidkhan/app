/*
 * @Author: Eduardo Policarpo
 * @contact: +55 43996611437
 * @Date: 2021-05-10 18:09:49
 * @LastEditTime: 2021-06-07 03:18:01
 */
import urlExists from "url-exists";
export default class Sessions {

    static session = new Array()
    static checkPath(path) {
        urlExists(path, (error, exists) => {
            if (exists) {
                return true
            }
            else {
                return false
            }
        })
    }
    // CHECK OR ADD A USER TO THE SESSION
    static checkAddUser(name) {
        var checkFilter = this.session.filter(order => (order.session === name)), add = null
        if (!checkFilter.length) {
            add = {
                session: name,
            }
            this.session.push(add)
            return true
        }
        return false
    }

    // CHECK IF THE USER EXISTS IN THE SESSION
    static checkSession(name) {
        var checkFilter = this.session.filter(order => (order.session === name))
        if (checkFilter.length) {
            return true
        }
        return false
    }

    // get session index (key)
    static getSessionKey(name) {
        if (this.checkSession(name)) {
            for (var i in this.session) {
                if (this.session[i].session === name) {
                    return i
                }
            }
        }
        return false
    }

    // ADD INFORMATION TO SESSION
    static addInfoSession(name, extend) {

        if (this.checkSession(name)) {
            for (var i in this.session) {
                if (this.session[i].session === name) {
                    Object.assign(this.session[i], extend)
                    return true
                }
            }
        }
        return false
    }

    // Remove object na session
    static removeInfoObjects(name, key) {
        if (this.checkSession(name)) {
            for (var i in this.session) {
                if (this.session[i].session === name) {
                    delete this.session[i][key]
                    return true
                }
            }
        }
        return false
    }

    // DELETE SESSION
    static deleteSession(name) {
        if (this.checkSession(name)) {
            var key = this.getSessionKey(name)
            delete this.session[key]
            return true
        }
        return false
    }

    // RETURN SESSION
    static getSession(name) {
        if (this.checkSession(name)) {
            var key = this.getSessionKey(name)
            return this.session[key]
        }
        return false
    }

    // RETURN ALL
    static getAll() {
        return this.session
    }

    // CHECK THE CLIENT
    static checkClient(name) {
        if (this.getSession(name) && this.getSession(name).client) {
            return true
        }
        return false
    }

}