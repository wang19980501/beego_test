package controllers

import (
	"fmt"
	beego "github.com/beego/beego/v2/server/web"
)

type HomeController struct {
	beego.Controller
}

//@Title Get
//@Description Logs user into the system
//@Success 200 {string} login success
//@Failure 403 user not exist
//@router / [get]
func (c *HomeController) A() {
	c.TplName = "home.html"
	//strings := c.Ctx.Request.Header["token"]
	//fmt.Print(strings)
	//c.Data["json"] = "aa"
	//c.ServeJSON()
}

// @Title Get
// @Description Logs user into the system
// @Success 200 {string} login success
// @Failure 403 user not exist
// @router /Get [post]
func (c *HomeController) Get() {
	//c.TplName = "home.html"
	strings := c.Ctx.Request.Header["token"]
	fmt.Print(strings)
	c.Data["json"] = "aa"
	c.ServeJSON()
}

