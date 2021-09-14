## Http控制器

控制器层是负责处理客户端请求，转发给响应模型，并将结果返回给客户端。

这和其他框架类似，通过创建控制器类，底层会将请求解析到对应的控制器方法去处理请求。

> 在App/HttpController 目录新建 `Index.php`

```php
<?php
namespace App\HttpController;

class Index extends BaseController
{
    public function index()
    {
        //直接输出
        $this->response()->write('hello php-sword!');
    }
}
```