package routers

import (
	beego "github.com/beego/beego/v2/server/web"
	"github.com/beego/beego/v2/server/web/context/param"
)

func init() {

    beego.GlobalControllerRouter["dmcs2000/controllers:AdminUserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:AdminUserController"],
        beego.ControllerComments{
            Method: "aLogin",
            Router: "/login",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:DCPController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:DCPController"],
        beego.ControllerComments{
            Method: "LogIn",
            Router: "/LogIn",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:DCPController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:DCPController"],
        beego.ControllerComments{
            Method: "Logout",
            Router: "/Logout/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:DCPController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:DCPController"],
        beego.ControllerComments{
            Method: "Reflush",
            Router: "/Reflush",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:UserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:UserController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:UserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:UserController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:UserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:UserController"],
        beego.ControllerComments{
            Method: "Get",
            Router: "/:uid",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:UserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:UserController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:uid",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:UserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:UserController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:uid",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:UserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:UserController"],
        beego.ControllerComments{
            Method: "Login",
            Router: "/login",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["dmcs2000/controllers:UserController"] = append(beego.GlobalControllerRouter["dmcs2000/controllers:UserController"],
        beego.ControllerComments{
            Method: "Logout",
            Router: "/logout",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
