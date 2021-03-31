package controllers

import (
	beego "github.com/beego/beego/v2/server/web"
)

type RegisterCodeController struct {
	beego.Controller
}

func (c *RegisterCodeController) Get() {
	// model = xx.Add();
	// s = model.json();
	s := `{"code":200,"msg":"操作成功!","data":{"id":null,"createTime":null,"updateTime":null,"registerCode":"0FRJPG8P3B2UB2USV6","codeType":null,"machineCode":"223CEE675F7F63A6"}}`
	c.Ctx.WriteString(s)
}

func (c *RegisterCodeController) Code() {
	// model = xx.Add();
	// s = model.json();
	s := `12345`
	c.Ctx.WriteString(s)
}
