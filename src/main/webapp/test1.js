/**
 * Project name(项目名称)：JS_for
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 21:00
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// 省略第一个表达式
var i = 0;
for (; i < 5; i++)
{
    // 要执行的代码
}
// 省略第二个表达式
for (var y = 0; ; y++)
{
    if (y > 5)
    {
        break;
    }
    // 要执行的代码
}
// 省略第一个和第三个表达式
var j = 0;
for (; j < 5;)
{
    // 要执行的代码
    j++;
}
// 省略所有表达式
var z = 0;
for (; ;)
{
    if (z > 5)
    {
        break;
    }
    // 要执行的代码
    z++;
}