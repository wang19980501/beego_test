// @APIVersion 1.0.0
// @Title mobile API
// @Description mobile has every tool to get any job done, so codename for the new mobile APIs.
// @Contact zhangzhongqiang@highsion.com
package routers

import (
	"dmcs2000/controllers"

	beego "github.com/beego/beego/v2/server/web"
)

func init() {

	beego.SetViewsPath("views")
	beego.BConfig.RouterCaseSensitive = true
	// beego.Router("/paperless/registerCode/get", &controllers.KeyController{})
	// beego.Router("/paperless/registerCode/code", &controllers.KeyController{})
	// beego.BConfig.RouterCaseSensitive = false
	beego.Router("/", &controllers.MainController{})
	beego.Router("/ping", &controllers.PongController{})
	beego.AutoRouter(&controllers.ObjectController{})

	ns := beego.NewNamespace("/paperless",
		beego.NSAutoRouter(&controllers.ObjectController{}),
		beego.NSAutoRouter(&controllers.RegisterCodeController{}),
		beego.NSNamespace("/dcp",
			beego.NSInclude(
				&controllers.DCPController{},
			),
		),
		beego.NSNamespace("/user",
			beego.NSInclude(
				&controllers.UserController{},
			),
		),

		//beego.NSNamespace("/adminUser",
		//	beego.NSInclude(
		//		&controllers.AdminUserController{},
		//	),
		//),
		// beego.NSRouter("/registerCode/get", &controllers.RegisterCodeController{}),
		// beego.NSRouter("/registerCode/code", &controllers.RegisterCodeController{}),
	)
	beego.AddNamespace(ns)
}
