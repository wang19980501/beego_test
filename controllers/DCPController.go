package controllers

import (
	"dmcs2000/models"
	"encoding/json"

	beego "github.com/beego/beego/v2/server/web"
)

type DCPController struct {
	beego.Controller
}

func (c *DCPController) Prepare() {
	// identity verification

}

// @Title reflush
// @Description get reflush
// @Param	body		body 	models.User	true		"body for user content"
// @Success 200 {int} models.User.Id
// @Failure 403 body is empty
// @router /Reflush [post]
func (u *DCPController) Reflush() {
	var user models.User
	json.Unmarshal(u.Ctx.Input.RequestBody, &user)
	uid := models.AddUser(user)
	u.Data["json"] = map[string]int{"uid": uid}
	u.ServeJSON()
}

// @Title reflush
// @Description get reflush
// @Success 200 {string} string
// @Failure 404 User not found
// @router /Logout/ [get]
func (u *DCPController) Logout() {
	var user models.User

	uid := models.AddUser(user)
	u.Data["json"] = map[string]int{"uid": uid}
	u.ServeJSON()
}

// @Title reflush
// @Description get reflush
// @Success 200 {int} models.User.Id
// @Failure 404 User not found
// @router /LogIn [get]
func (u *DCPController) LogIn() {
	var user models.User

	uid := models.AddUser(user)
	u.Data["json"] = map[string]int{"uid": uid}
	u.ServeJSON()
}
