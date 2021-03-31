package controllers

import (
	beego "github.com/beego/beego/v2/server/web"
)

type ObjectController struct {
	beego.Controller
}

func (c *ObjectController) Login() {
	// model = xx.Add();
	// s = model.json();
	s := `Login success`
	/*
	 * 1. controller -> server
	 * 2. server -> proxy
	 * 3. proxy -> real server
	 */
	c.Ctx.WriteString(s)
}

func (c *ObjectController) Logout() {
	// model = xx.Add();
	// s = model.json();
	s := `Logout success`
	c.Ctx.WriteString(s)
}
