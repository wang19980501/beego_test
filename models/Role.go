package models

import (
	"errors"
	"strconv"
	"time"
)



var (
	RoleList map[string]*Role
)

func init() {
	RoleList = make(map[string]*Role)
	r := Role{"role_admin", "admin", 1}
	RoleList["role_admin"] = &r
	r1 := Role{"role_user", "user", 1}
	RoleList["role_user"] = &r1
}

type Role struct {
	Id       string
	Name string
	RoleType int
}



func AddRole(r Role) string {
	r.Id = "role_" + strconv.FormatInt(time.Now().UnixNano(), 10)
	RoleList[r.Id] = &r
	return r.Id
}

func GetRole(uid string) (r *Role, err error) {
	if r, ok := RoleList[uid]; ok {
		return r, nil
	}
	return nil, errors.New("Role not exists")
}

func GetAllRoles() map[string]*Role {
	return RoleList
}

func UpdateRole(rid string, rr *Role) (a *Role, err error) {
	if r, ok := RoleList[rid]; ok {
		if rr.Name != "" {
			r.Name = rr.Name
		}
		if rr.RoleType > 0 {
			r.RoleType = rr.RoleType
		}
		return r, nil
	}
	return nil, errors.New("Role Not Exist")
}

func Validate(username string, roleType int) bool {
	for _, r := range RoleList {
		if r.Name == username && r.RoleType == roleType {
			return true
		}
	}
	return false
}

func DeleteRole(uid string) {
	delete(RoleList, uid)
}
