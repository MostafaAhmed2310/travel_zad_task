import { headerConfigKeyName, userRoleIdKeyname } from '@/app.config'

export function getAuthState(): boolean {
    let auth_state = localStorage.getItem(headerConfigKeyName) ? true : false;
    return auth_state;
}

export function getRoleId(): number {
    let roleId = localStorage.getItem(userRoleIdKeyname) ? JSON.parse(localStorage.getItem(userRoleIdKeyname)!) : 0;
    return roleId;
}

export function getHeaderConfig() {
    if (localStorage.getItem(headerConfigKeyName)) {
        var headerConfigJson = localStorage.getItem(headerConfigKeyName);
        return JSON.parse(headerConfigJson!)
    } else {
        return null;
    }
}