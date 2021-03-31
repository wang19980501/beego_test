package controllers

import (
	beego "github.com/beego/beego/v2/server/web"
)

type PongController struct {
	beego.Controller
}

func (c *PongController) Get() {
	// model = xx.Add();
	// s = model.json();
	s:= `{"code":200,"msg":"操作成功!","data":{"id":null,"createTime":null,"updateTime":null,"registerCode":"0FRJPG8P3B2UB2USV6","codeType":null,"machineCode":"223CEE675F7F63A6"}}`;
	c.Ctx.WriteString(s)
}
