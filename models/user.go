package models

import (
	"errors"
)

var (
	UserList map[int]*User
)

func init() {
	UserList = make(map[int]*User)
	u := User{1, "admin", "123456"}
	UserList[1] = &u

	u1 := User{2, "user", "123456"}
	UserList[2] = &u1
}

type User struct {
	Id       int
	Username string
	Password string
}

type Profile struct {
	Gender  string
	Age     int
	Address string
	Email   string
}

func AddUser(u User) int {
	u.Id = 3
	UserList[u.Id] = &u
	return u.Id
}

func GetUser(uid int) (u *User, err error) {
	if u, ok := UserList[uid]; ok {
		return u, nil
	}
	return nil, errors.New("User not exists")
}

func GetAllUsers() map[int]*User {
	return UserList
}

func UpdateUser(uid int, uu *User) (a *User, err error) {
	if u, ok := UserList[uid]; ok {
		if uu.Username != "" {
			u.Username = uu.Username
		}
		if uu.Password != "" {
			u.Password = uu.Password
		}
		return u, nil
	}
	return nil, errors.New("User Not Exist")
}

func Login(username, password string) bool {
	for _, u := range UserList {
		if u.Username == username && u.Password == password {
			return true
		}
	}
	return false
}

func GetUserByNameAndPassword(username, password string) User {
	for _, u := range UserList {
		if u.Username == username && u.Password == password {
			return *u
		}
	}
	return User{0,"",""}
}

func DeleteUser(uid int) {
	delete(UserList, uid)
}
