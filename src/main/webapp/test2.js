/**
 * Project name(项目名称)：JS_for
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 21:01
 * Version(版本): 1.0
 * Description(描述)： 无
 */

for (var i = 1; i <= 9; i++)
{
    for (var j = 1; j <= i; j++)
    {
        document.write(j + " x " + i + " = " + (i * j) + "&emsp;");
    }
    document.write("<br>");
}