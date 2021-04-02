package models



type JsonReturn struct {
	Msg  string 	    `json:"msg"`
	Code int		    `json:"code"`
	Data interface{}	`json:"data"`		//Data字段需要设置为interface类型以便接收任意数据
	//json标签意义是定义此结构体解析为json或序列化输出json时value字段对应的key值,如不想此字段被解析可将标签设为`json:"-"`
}

func Result(msg string,code int,data interface{}) JsonReturn{
	var JsonReturn JsonReturn
	JsonReturn.Msg = msg
	JsonReturn.Code = code
	JsonReturn.Data = data
	//c.Data["json"] = JsonReturn		//将结构体数组根据tag解析为json
	//c.ServeJSON()					//对json进行序列化输出
	//c.StopRun()						//终止执行逻辑
	return JsonReturn
}