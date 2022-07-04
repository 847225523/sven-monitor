import tracker from "../Tracker";
export function listenerError() {
    window.addEventListener('error', (event) => {
        if (event.target.localName) {
            console.log('这是资源错误', event);
            const {
                timeStamp,
                type,
            } = event
            const errorLog = {
                title:document.title,
                url:window.location.href,
                userAgent:window.navigator.userAgent,
                timeStamp,
                type,
                errorType:'资源类型错误',
            }
            tracker.send(errorLog)
        }
        else {
            console.log(document.title)
            console.log('这是代码错误', event);
            // {
            //     "title": "前端监控系统", // 页面标题
            //     "url": "http://localhost:8080/", // 页面URL
            //     "timestamp": "1590815288710", // 访问时间戳
            //     "userAgent": "Chrome", // 用户浏览器类型
            //     "kind": "stability", // 大类
            //     "type": "error", // 小类
            //     "errorType": "jsError", // 错误类型
            //     "message": "Uncaught TypeError: Cannot set property 'error' of undefined", // 类型详情
            //     "filename": "http://localhost:8080/", // 访问的文件名
            //     "position": "0:0", // 行列信息
            //     "stack": "btnClick (http://localhost:8080/:20:39)^HTMLInputElement.onclick (http://localhost:8080/:14:72)", // 堆栈信息
            //     "selector": "HTML BODY #container .content INPUT" // 选择器
            // }
            const {
                filename, 
                lineno, // 行号
                colno, // 列号
                message,
                error:{stack},
                type,
                timeStamp,
            } = event
            const errorLog = {
                title:document.title,
                url:window.location.href,
                timeStamp,
                userAgent:window.navigator.userAgent,
                type,
                errorType:'jsError',
                message,
                filename,
                position:`${lineno}:${colno}`,
                stack,
            }
            tracker.send(errorLog)
        }
    }, true)
}