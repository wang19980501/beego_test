package models

import (
	"errors"
	"github.com/dgrijalva/jwt-go"
	"time"
)

const (
	ErrorReason_ServerBusy = "服务器繁忙"
	ErrorReason_ReLogin = "请重新登陆"
)

type JWT struct {
	jwt.StandardClaims
	UserId int `json:user_id`
	Password string `json:password`
	Username string `json:username`
}

var (
	Secret     = "dong_tech" // 加盐
	ExpireTime = 3600        // token有效期
)



func GetToken(u User) (string, error) {
	claims := &JWT{
		UserId: u.Id,
		Username: u.Username,
		Password: u.Password,
	}
	claims.ExpiresAt = time.Now().Add(time.Second * time.Duration(ExpireTime)).Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString([]byte(Secret))
	if err != nil {
		return "", errors.New(ErrorReason_ServerBusy)
	}
	return signedToken,nil
}